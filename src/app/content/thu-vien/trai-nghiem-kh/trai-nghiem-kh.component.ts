import { Component, Input, input } from '@angular/core';
import { infoTour } from '../../../service/infoTour.service';

@Component({
  selector: 'app-trai-nghiem-kh',
  templateUrl: './trai-nghiem-kh.component.html',
  styleUrl: './trai-nghiem-kh.component.scss',
})
export class TraiNghiemKhComponent {
  @Input() paginationList: any = [];

  constructor(public infoTour: infoTour) {}

  itemTourList: any[] = [];

  ngOnInit(): void {
    this.checkPaginationList();
  }

  // nếu không có data thì trả về dữ liệu mặc định
  checkPaginationList() {
    if (!this.paginationList || this.paginationList.length === 0) {
      this.paginationList = this.infoTour.traiNghiem;
    }
  }
  // Hàm nhận dữ liệu phân trang từ component app-phan-trang
  onTourChanged(paginatedData: any[]) {
    this.itemTourList = paginatedData;
  }

  // chuyển title sang dạng URL routerLink
  slugify(title: string): string {
    return title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  }
}
