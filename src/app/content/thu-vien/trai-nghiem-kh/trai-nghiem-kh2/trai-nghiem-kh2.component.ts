import { Component, Input, OnInit, HostListener } from '@angular/core';
import { infoTour } from '../../../../service/infoTour.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trai-nghiem-kh2',
  templateUrl: './trai-nghiem-kh2.component.html',
  styleUrls: ['./trai-nghiem-kh2.component.scss'],
})
export class TraiNghiemKh2Component implements OnInit {
  @Input() coverPhoto: string = 'anh-bia/tour-du-lich.jpg';

  tourId: string | null = null;
  tourData: any;

  showCustomLightbox = false;
  currentImageIndex = 0;

  constructor(private route: ActivatedRoute, public infoTour: infoTour) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.tourId = params.get('slug');

      if (this.tourId) {
        this.tourData = this.infoTour.traiNghiem.find(
          (t: any) => this.slugify(t.title) === this.tourId
        );

        if (!this.tourData) {
          console.error('Không tìm thấy dữ liệu tour với slug:', this.tourId);
        } else {
          console.log('Đã tìm thấy dữ liệu tour:', this.tourData);
        }
      }
    });

    this.newsArr(); // vẫn giữ để cập nhật tin tức ngẫu nhiên nếu cần
  }

  openCustomLightbox(index: number): void {
    console.log('Mở lightbox với ảnh index:', index);
    this.currentImageIndex = index;
    this.showCustomLightbox = true;
  }

  closeCustomLightbox(): void {
    this.showCustomLightbox = false;
  }

  nextImage(): void {
    if (
      this.tourData?.info &&
      this.currentImageIndex < this.tourData.info.length - 1
    ) {
      this.currentImageIndex++;
    }
  }

  prevImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  slugify(title: string): string {
    if (!title) return '';
    return title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  }

  // tin tuc lay ngau nhien 3 bai
  news: any = [];
  newsArr() {
    if (this.infoTour.news && this.infoTour.news.length) {
      const shuffled = [...this.infoTour.news].sort(() => Math.random() - 0.5);
      this.news = shuffled.slice(0, 3);
    }
  }

  // Xử lý phím khi đang mở lightbox
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (!this.showCustomLightbox) return;

    switch (event.key) {
      case 'ArrowLeft':
        this.prevImage();
        break;
      case 'ArrowRight':
        this.nextImage();
        break;
      case 'Escape':
        this.closeCustomLightbox();
        break;
    }
  }

  // Xử lý cuộn chuột để chuyển ảnh trong lightbox
  onWheel(event: WheelEvent): void {
    if (!this.showCustomLightbox) return;

    event.preventDefault(); // chặn cuộn trang

    if (event.deltaY > 0) {
      this.nextImage();
    } else {
      this.prevImage();
    }

    //
  }

  // tour-lien-quan
  tourList = ['tour', 'tour xuyen quoc da', 'tour trong nuoc', 'tour quoc te'];

  //  Lọc và sắp xếp các đối tượng theo mức độ liên quan (nhiều từ khớp nhất đứng đầu)
  get filterAlbum() {
    if (!this.tourData?.title || !this.infoTour?.traiNghiem) return [];

    const tuKhoa = this.tourData.title.toLowerCase().split(' ');

    return this.infoTour.traiNghiem
      .map((item: any) => {
        const titleLower = item.title.toLowerCase();
        const tuTrung = tuKhoa.filter((tu: any) => titleLower.includes(tu));
        return {
          item,
          soTuTrung: tuTrung.length,
        };
      })
      .filter(
        (x: any) =>
          x.soTuTrung >= 1 &&
          x.item.title.toLowerCase().trim() !==
            this.tourData.title.toLowerCase().trim()
      )
      .sort((a: any, b: any) => b.soTuTrung - a.soTuTrung)
      .map((x: any) => x.item);
  }
}
