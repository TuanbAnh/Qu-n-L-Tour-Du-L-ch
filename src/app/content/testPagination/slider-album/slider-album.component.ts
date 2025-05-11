import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

// Interface chung cho các mục hiển thị trong slider
export interface SliderItem {
  id?: string | number;
  img: string;
  title: string;
  [key: string]: any; // Cho phép các thuộc tính bổ sung
}

@Component({
  selector: 'app-slider-album',
  templateUrl: './slider-album.component.html',
  styleUrl: './slider-album.component.scss',
})
export class SliderAlbumComponent implements OnInit, OnDestroy {
  // Inputs để tùy chỉnh
  @Input() items: SliderItem[] = [];
  @Input() itemsPerPage: number = 3;
  @Input() autoSlideInterval: number = 3; // Thời gian tự động chuyển trang (giây)
  @Input() enableAutoSlide: boolean = true;
  @Input() showIndicators: boolean = true;
  @Input() showNavButtons: boolean = true;
  @Input() containerClass: string = '';
  @Input() slideTrackClass: string = '';
  @Input() itemClass: string = '';
  @Input() createUrlSlug: boolean = true; // Có tạo slug URL hay không

  // Outputs để thông báo các sự kiện
  @Output() itemClick = new EventEmitter<SliderItem>();
  @Output() pageChange = new EventEmitter<number>();

  // Các biến trạng thái nội bộ
  currentPage: number = 0;
  totalPages: number = 0;
  autoSlideSubscription: Subscription | null = null;

  // Biến theo dõi sự kiện kéo
  startX: number = 0;
  isDragging: boolean = false;
  dragThreshold: number = 50; // Ngưỡng để xác định có chuyển trang hay không

  ngOnInit(): void {
    this.calculateTotalPages();
    if (this.enableAutoSlide) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  ngOnChanges(): void {
    // Khi dữ liệu đầu vào thay đổi, tính lại tổng số trang
    this.calculateTotalPages();
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
  }

  startAutoSlide(): void {
    this.stopAutoSlide();
    this.autoSlideSubscription = interval(
      this.autoSlideInterval * 1000
    ).subscribe(() => {
      this.nextPage();
    });
  }

  stopAutoSlide(): void {
    if (this.autoSlideSubscription) {
      this.autoSlideSubscription.unsubscribe();
      this.autoSlideSubscription = null;
    }
  }

  resetAutoSlideTimer(): void {
    if (this.enableAutoSlide) {
      this.stopAutoSlide();
      this.startAutoSlide();
    }
  }

  goToPage(pageIndex: number): void {
    if (pageIndex >= 0 && pageIndex < this.totalPages) {
      this.currentPage = pageIndex;
      this.pageChange.emit(this.currentPage);
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

  // Tạo mảng chứa các phần tử rỗng để hiển thị khi số mục không đủ trên trang cuối
  get emptySlots(): number[] {
    const remainder = this.items.length % this.itemsPerPage;
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
      this.resetAutoSlideTimer();
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
    this.resetAutoSlideTimer();
  }

  // Xử lý khi người dùng rời khỏi slider trong khi đang kéo
  onTouchLeave(): void {
    if (this.isDragging) {
      this.isDragging = false;
      this.resetAutoSlideTimer();
    }
  }

  // Hàm để tạo slug URL từ tên tiêu đề
  createSlugFromTitle(title: string): string {
    if (!this.createUrlSlug) return title;

    // Chuyển đổi tiêu đề thành đường dẫn URL thân thiện
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
      .replace(/[^\w-]/g, ''); // Xóa các ký tự đặc biệt
  }

  // Phương thức để phát sự kiện click cho mục
  onItemClick(item: SliderItem): void {
    this.itemClick.emit(item);
  }
}
