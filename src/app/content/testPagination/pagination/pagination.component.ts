import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../../service/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
  // Form quản lý danh mục
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    status: new FormControl(1),
  });

  // Biến phân trang
  currentPage: number = 0;
  totalPages: number = 0;
  displayedPages: number[] = [];
  itemsPerPage: number = 6;

  // Dữ liệu
  categories: any[] = [];
  displayedCategories: any[] = [];

  constructor(private apiService: PaginationService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  // Tải danh sách danh mục và tự động phân trang
  loadCategories(): void {
    this.apiService.getCount().subscribe((data) => {
      this.totalPages = Math.ceil(data.total / this.itemsPerPage); // làm tròn số lên
      this.updatePagination();
      this.goToPage(0);
    });
  }

  // Cập nhật mảng số trang hiển thị
  updatePagination(): void {
    const maxPagesToShow = 9;
    const totalPagesToShow = Math.min(this.totalPages, maxPagesToShow); //tìm giá trị nhỏ nhất trong ngoặc

    // Tính toán vị trí bắt đầu để hiển thị trang hiện tại ở giữa khi có thể
    let startPage = 0;
    if (this.currentPage > Math.floor(maxPagesToShow / 2)) {
      // làm tròn số xuống
      startPage = Math.min(
        this.currentPage - Math.floor(maxPagesToShow / 2),
        this.totalPages - maxPagesToShow
      );
      startPage = Math.max(0, startPage);
    }

    // Tạo mảng các số trang để hiển thị
    this.displayedPages = Array.from(
      { length: totalPagesToShow },
      (_, i) => startPage + i
    );
  }

  // Chuyển đến trang được chọn
  goToPage(pageIndex: number): void {
    if (pageIndex < 0 || pageIndex >= this.totalPages) return;

    this.currentPage = pageIndex;
    this.updatePagination();

    this.apiService
      .getPaginated(pageIndex + 1, this.itemsPerPage)
      .subscribe((data) => {
        this.displayedCategories = data;
      });
  }

  // Điều hướng phân trang
  goToFirstPage(): void {
    this.goToPage(0);
  }

  goToLastPage(): void {
    this.goToPage(this.totalPages - 1);
  }

  goToPreviousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  goToNextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  // Thêm danh mục mới
  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.categoryForm.valid) return;

    const newCategory = {
      name: this.categoryForm.get('name')?.value,
      status: this.categoryForm.get('status')?.value,
    };

    this.apiService.addCategory(newCategory).subscribe({
      next: () => {
        alert('Thêm thành công!');
        this.categoryForm.reset({ status: 1 });
        this.loadCategories();
      },
      error: () => {
        alert('Có lỗi khi thêm!');
      },
    });
  }

  // Cập nhật danh mục
  updateCategory(id: number): void {
    const updatedData = {
      name: this.categoryForm.get('name')?.value,
      status: this.categoryForm.get('status')?.value,
    };

    this.apiService.updateCategory(id, updatedData).subscribe({
      next: () => {
        alert('Cập nhật thành công!');
        this.categoryForm.reset({ status: 1 });
        this.loadCategories();
      },
      error: () => {
        alert('Lỗi khi cập nhật!');
      },
    });
  }

  // Xóa danh mục
  deleteCategory(id: number): void {
    if (!confirm('Bạn có chắc muốn xóa?')) return;

    this.apiService.deleteCategory(id).subscribe({
      next: () => {
        // Nếu xóa phần tử cuối cùng trên trang hiện tại, quay lại trang trước đó
        if (this.displayedCategories.length === 1 && this.currentPage > 0) {
          this.goToPage(this.currentPage - 1);
        } else {
          this.loadCategories();
        }
      },
      error: () => {
        alert('Lỗi khi xóa!');
      },
    });
  }
}
