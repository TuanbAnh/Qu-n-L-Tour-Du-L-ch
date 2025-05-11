import { Component, OnInit } from '@angular/core';
import { infoTour } from '../../../service/infoTour.service';
@Component({
  selector: 'app-trai-nghiem-kh',
  templateUrl: './trai-nghiem-kh.component.html',
  styleUrl: './trai-nghiem-kh.component.scss',
})
export class TraiNghiemKhComponent implements OnInit {
  constructor(public infoTour: infoTour) {}

  ngOnInit() {
    // Khi component này được khởi tạo, cập nhật loại content
    this.infoTour.setCurrentSection('trai-nghiem');
  }
}
