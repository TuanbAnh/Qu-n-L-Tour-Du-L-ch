import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { infoTour } from '../../../service/infoTour.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  // ViewChild để truy cập trực tiếp đến các ô input
  @ViewChild('categoryInput') categoryInput!: ElementRef;
  @ViewChild('scheduleInput') scheduleInput!: ElementRef;

  // Thuộc tính chính
  domesticInternational = 'domestic';

  // Trạng thái dropdown danh mục
  isOpenCategory = false;
  selectedCategory = '';
  searchTermCategory = '';
  filteredCategories: any = [];

  // Trạng thái dropdown lịch trình
  isOpenSchedule = false;
  selectedSchedule = '';
  searchTermSchedule = '';
  filteredSchedules: any = [];

  // Subjects cho xử lý tìm kiếm tốt hơn với tiếng Việt
  private categorySearch = new Subject<string>();
  private scheduleSearch = new Subject<string>();

  constructor(public infoTour: infoTour) {}

  ngOnInit() {
    // Khởi tạo danh sách
    this.filteredCategories = [...this.infoTour.categories];
    this.filteredSchedules = [...this.infoTour.date];

    // Xử lý click bên ngoài để đóng dropdown
    document.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.category-dropdown')) {
        this.isOpenCategory = false;
      }
      if (!target.closest('.schedule-dropdown')) {
        this.isOpenSchedule = false;
      }
    });

    // Thiết lập xử lý tìm kiếm danh mục với debounce
    this.categorySearch
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((term) => {
        this.filteredCategories = this.infoTour.filterCategoryOptions(
          this.infoTour.categories,
          term
        );
      });

    // Thiết lập xử lý tìm kiếm lịch trình với debounce
    this.scheduleSearch
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((term) => {
        this.filteredSchedules = this.infoTour.filterSimpleOptions(
          this.infoTour.date,
          term
        );
      });
  }

  // Phương thức chuyển đổi giữa domestic và international
  toggle(data: string) {
    this.domesticInternational = data;
  }

  // Đóng/mở dropdown và xử lý focus
  toggleDropdown(type: 'category' | 'schedule') {
    if (type === 'category') {
      this.isOpenCategory = !this.isOpenCategory;
      this.isOpenSchedule = false; // Đóng dropdown lịch trình nếu đang mở

      if (this.isOpenCategory) {
        this.searchTermCategory = '';
        this.filteredCategories = [...this.infoTour.categories];

        // Focus vào ô input tìm kiếm
        setTimeout(() => {
          if (this.categoryInput) {
            this.categoryInput.nativeElement.focus();
          } else {
            const input = document.querySelector(
              '.category-dropdown .search-input'
            ) as HTMLInputElement;
            if (input) input.focus();
          }
        }, 10);
      }
    } else if (type === 'schedule') {
      this.isOpenSchedule = !this.isOpenSchedule;
      this.isOpenCategory = false; // Đóng dropdown danh mục nếu đang mở

      if (this.isOpenSchedule) {
        this.searchTermSchedule = '';
        this.filteredSchedules = [...this.infoTour.date];

        // Focus vào ô input tìm kiếm
        setTimeout(() => {
          if (this.scheduleInput) {
            this.scheduleInput.nativeElement.focus();
          } else {
            const input = document.querySelector(
              '.schedule-dropdown .search-input'
            ) as HTMLInputElement;
            if (input) input.focus();
          }
        }, 10);
      }
    }
  }

  // Xử lý tìm kiếm khi người dùng gõ (cả tiếng Anh và tiếng Việt)
  onSearch(type: 'category' | 'schedule', term: string) {
    if (type === 'category') {
      this.categorySearch.next(term);
    } else if (type === 'schedule') {
      this.scheduleSearch.next(term);
    }
  }

  // Lọc tùy chọn (giữ lại để tương thích ngược)
  filterOptions(type: 'category' | 'schedule') {
    if (type === 'category') {
      this.categorySearch.next(this.searchTermCategory);
    } else if (type === 'schedule') {
      this.scheduleSearch.next(this.searchTermSchedule);
    }
  }

  // Chọn một tùy chọn
  selectOption(type: 'category' | 'schedule', value: string) {
    if (type === 'category') {
      this.selectedCategory = value;
      this.isOpenCategory = false;
    } else if (type === 'schedule') {
      this.selectedSchedule = value;
      this.isOpenSchedule = false;
    }
  }
}
