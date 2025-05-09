import { Component, Input } from '@angular/core';
import { infoTour } from '../../service/infoTour.service';

@Component({
  selector: 'app-tour-du-lich',
  templateUrl: './tour-du-lich.component.html',
  styleUrl: './tour-du-lich.component.scss',
})
export class TourDuLichComponent {
  @Input() coverPhoto: string = 'anh-bia/tour-du-lich.jpg'; // ảnh bìa
  @Input() news: any[] = []; // Tin tức
  @Input() arrTour: any[] = []; // Lấy mảng arr từ service
  @Input() itemsPerPage = 9; // HIển thị số tour trên 1 trang

  currentPage = 0;

  constructor(public infoTour: infoTour) {}

  ngOnInit() {
    this.kiemTra();

    //  lấy ngẫu nhiên 3 bài tin tức mõi lần load trang
    const shuffled = [...this.infoTour.news].sort(() => Math.random() - 0.5);
    this.news = shuffled.slice(0, 3);
  }
  kiemTra() {
    if (!this.arrTour || this.arrTour.length === 0) {
      const combined = [...this.infoTour.arr, ...this.infoTour.arr2];
      for (let i = combined.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [combined[i], combined[j]] = [combined[j], combined[i]];
      }
      this.arrTour = combined;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.arrTour.length / this.itemsPerPage);
  }

  get paginatedArr() {
    const start = this.currentPage * this.itemsPerPage;
    return this.arrTour.slice(start, start + this.itemsPerPage);
  }

  get displayedPages(): number[] {
    const maxPagesToShow = 9;
    const total = this.totalPages;
    const half = Math.floor(maxPagesToShow / 2);
    let start = 0;
    if (this.currentPage > half) {
      start = Math.min(this.currentPage - half, total - maxPagesToShow);
      start = Math.max(0, start);
    }
    const count = Math.min(total, maxPagesToShow);
    return Array.from({ length: count }, (_, i) => start + i);
  }

  goToPage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      //cuôn lên đầu trang khi chuyển trang
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
    }
  }

  goToFirstPage() {
    this.currentPage = 0;
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  }

  goToPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
    }
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  }
}
