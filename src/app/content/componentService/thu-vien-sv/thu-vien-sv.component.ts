import { Component, Input, OnInit } from '@angular/core';
import { infoTour } from '../../../service/infoTour.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thu-vien-sv',
  templateUrl: './thu-vien-sv.component.html',
  styleUrl: './thu-vien-sv.component.scss',
})
export class ThuVienSvComponent implements OnInit {
  @Input() paginationList: any = [];
  currentSection: string = '';

  constructor(public infoTour: infoTour) {}

  itemTourList: any[] = [];

  ngOnInit(): void {
    this.checkPaginationList();
  }

  // nếu không có data thì trả về dữ liệu mặc định
  checkPaginationList() {
    if (!this.paginationList || this.paginationList.length === 0) {
      if (this.currentSection === 'video') {
        this.paginationList = this.infoTour.videoList;
      } else {
        this.paginationList = this.infoTour.traiNghiem;
      }
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
