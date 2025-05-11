import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { infoTour } from '../../../service/infoTour.service';
import { Router } from '@angular/router';

interface TourItem {
  img: string;
  title: string;
  video: string;
}

@Component({
  selector: 'app-slider-album',
  templateUrl: './slider-album.component.html',
  styleUrl: './slider-album.component.scss',
})
export class SliderAlbumComponent implements OnInit, OnDestroy {
  tours: TourItem[] = [];
  currentPage: number = 0;
  totalPages: number = 0;
  itemsPerPage: number = 3; // Hiển thị 3 tour mỗi trang
  autoSlideSubscription: Subscription | null = null;
  thoiGian: number = 3;

  // Biến theo dõi sự kiện kéo
  startX: number = 0;
  isDragging: boolean = false;
  dragThreshold: number = 50; // Ngưỡng để xác định có chuyển trang hay không

  constructor(private infoTour: infoTour, private router: Router) {}

  ngOnInit(): void {
    // Lấy dữ liệu tour từ service
    this.tours = this.infoTour.videoList;
    this.totalPages = Math.ceil(this.tours.length / this.itemsPerPage);
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.stopAutoSlide();
    this.autoSlideSubscription = interval(this.thoiGian * 1000).subscribe(
      () => {
        this.nextPage();
      }
    );
  }

  stopAutoSlide(): void {
    if (this.autoSlideSubscription) {
      this.autoSlideSubscription.unsubscribe();
      this.autoSlideSubscription = null;
    }
  }

  resetAutoSlideTimer(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  goToPage(pageIndex: number): void {
    if (pageIndex >= 0 && pageIndex < this.totalPages) {
      this.currentPage = pageIndex;
      this.resetAutoSlideTimer();
    }
  }

  previousPage(): void {
    this.goToPage(
      this.currentPage - 1 < 0 ? this.totalPages - 1 : this.currentPage - 1
    );
  }

  nextPage(): void {
    this.goToPage(
      this.currentPage + 1 >= this.totalPages ? 0 : this.currentPage + 1
    );
  }

  // Phương thức để tính transform cho slider track
  get sliderTransform(): string {
    return `translateX(-${this.currentPage * 100}%)`;
  }

  // Lấy các tour thuộc trang hiện tại
  get currentPageTours(): TourItem[] {
    const startIndex = this.currentPage * this.itemsPerPage;
    return this.tours.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Tạo mảng chứa các phần tử rỗng để hiển thị khi số tour không đủ 3 trên trang cuối
  get emptySlots(): number[] {
    const remainder = this.tours.length % this.itemsPerPage;
    if (remainder === 0) return [];
    return Array(this.itemsPerPage - remainder).fill(0);
  }

  // Bắt đầu kéo
  onTouchStart(event: TouchEvent | MouseEvent): void {
    if (event instanceof MouseEvent) {
      this.startX = event.clientX;
    } else {
      this.startX = event.touches[0].clientX;
    }
    this.isDragging = true;
    this.stopAutoSlide();
  }

  // Theo dõi kéo
  onTouchMove(event: TouchEvent | MouseEvent): void {
    // Chỉ xử lý nếu đang trong trạng thái kéo
    if (!this.isDragging) return;

    // Không ngăn chặn sự kiện mặc định để tránh làm gián đoạn trải nghiệm cuộn trang
    // event.preventDefault() được loại bỏ
  }

  // Kết thúc kéo và xử lý chuyển trang
  onTouchEnd(event: TouchEvent | MouseEvent): void {
    if (!this.isDragging) return;

    let endX: number;

    if (event instanceof MouseEvent) {
      endX = event.clientX;
    } else if (event instanceof TouchEvent) {
      endX = event.changedTouches[0].clientX;
    } else {
      this.isDragging = false;
      this.startAutoSlide();
      return;
    }

    const diffX = this.startX - endX;

    // Chỉ chuyển trang khi kéo đủ khoảng cách
    if (Math.abs(diffX) > this.dragThreshold) {
      if (diffX > 0) {
        // Kéo sang trái -> chuyển trang tiếp theo
        this.nextPage();
      } else {
        // Kéo sang phải -> chuyển trang trước
        this.previousPage();
      }
    }

    // Đặt lại trạng thái kéo
    this.isDragging = false;
    this.startAutoSlide();
  }

  // Xử lý khi người dùng rời khỏi slider trong khi đang kéo
  onTouchLeave(): void {
    if (this.isDragging) {
      this.isDragging = false;
      this.startAutoSlide();
    }
  }

  // Hàm để chuyển hướng đến trang chi tiết tour
  navigateToTour(tour: TourItem): void {
    // Tạo URL thân thiện từ tiêu đề tour
    const slug = this.createSlugFromTitle(tour.title);
    this.router.navigate(['/tour', slug]);
  }

  // Hàm để tạo slug URL từ tên tour - được phơi ra cho HTML sử dụng
  createSlugFromTitle(title: string): string {
    // Chuyển đổi tiêu đề thành đường dẫn URL thân thiện
    // Ví dụ: "DU LỊCH HÀN QUỐC MÙA HOA ANH ĐÀO" -> "du-lich-han-quoc-mua-hoa-anh-dao"
    return title
      .toLowerCase()
      .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
      .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
      .replace(/[èéẹẻẽêềếệểễ]/g, 'e')
      .replace(/[ìíịỉĩ]/g, 'i')
      .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
      .replace(/[ùúụủũưừứựửữ]/g, 'u')
      .replace(/[ỳýỵỷỹ]/g, 'y')
      .replace(/đ/g, 'd')
      .replace(/[^\w\-]/g, ''); // Xóa các ký tự đặc biệt
  }
}
