import { Component, EventEmitter, Input, Output } from '@angular/core';
import { infoTour } from '../../../service/infoTour.service';

@Component({
  selector: 'app-phan-trang',
  templateUrl: './phan-trang.component.html',
  styleUrl: './phan-trang.component.scss',
})
export class PhanTrangComponent {
  @Input() arrTour: any[] = []; // Lấy mảng arrTour từ service
  @Input() itemsPerPage = 9; // HIển thị số tour trên 1 trang
  @Output() paginatedChange = new EventEmitter<any[]>();

  currentPage = 0;

  constructor(public infoTour: infoTour) {}

  ngOnChanges() {
    this.emitPaginatedData();
  }

  get totalPages() {
    return Math.ceil(this.arrTour.length / this.itemsPerPage);
  }

  emitPaginatedData() {
    const start = this.currentPage * this.itemsPerPage;
    const paginated = this.arrTour.slice(start, start + this.itemsPerPage);
    this.paginatedChange.emit(paginated);
  }

  goToPage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.emitPaginatedData();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  get displayedPages(): number[] {
    const pages = [];
    const total = this.totalPages;
    const current = this.currentPage;
    const delta = 2; // hiển thị 5 trang: current +/- 2

    const start = Math.max(0, current - delta);
    const end = Math.min(total, current + delta + 1);

    for (let i = start; i < end; i++) {
      pages.push(i);
    }

    return pages;
  }

  goToFirstPage() {
    this.currentPage = 0;
    this.emitPaginatedData(); // bổ sung dòng này
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.emitPaginatedData(); // bổ sung
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.emitPaginatedData(); // bổ sung
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    this.emitPaginatedData(); // bổ sung
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
