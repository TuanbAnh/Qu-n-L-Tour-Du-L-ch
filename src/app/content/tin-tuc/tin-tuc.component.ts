import { Component, OnInit } from '@angular/core';
import { infoTour } from '../../service/infoTour.service';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrl: './tin-tuc.component.scss',
})
export class TinTucComponent implements OnInit {
  newsItems: any[] = [];
  newsChunks: any[][] = [];
  currentPage = 0;
  itemsPerPage = 9; // Hiển thị 9 tin tức mỗi trang (3 khung news, mỗi khung chứa 3 tin)

  constructor(private infoTour: infoTour) {}

  ngOnInit() {
    this.newsItems = this.infoTour.news;
    this.updateNewsChunks();
  }

  updateNewsChunks() {
    const start = this.currentPage * this.itemsPerPage;
    const paginatedItems = this.newsItems.slice(
      start,
      start + this.itemsPerPage
    );

    // Chia mảng paginatedItems thành 3 khung, mỗi khung chứa 3 tin
    this.newsChunks = [];
    for (let i = 0; i < 3; i++) {
      const chunk = paginatedItems.slice(i * 3, i * 3 + 3);
      if (chunk.length > 0) {
        this.newsChunks.push(chunk);
      }
    }
  }

  get totalPages(): number {
    return Math.ceil(this.newsItems.length / this.itemsPerPage);
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
      this.updateNewsChunks();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToFirstPage() {
    this.currentPage = 0;
    this.updateNewsChunks();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateNewsChunks();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updateNewsChunks();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    this.updateNewsChunks();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
