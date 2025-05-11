import { Component, OnInit } from '@angular/core';
import { infoTour } from '../../../service/infoTour.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent implements OnInit {
  constructor(public infoTour: infoTour) {}

  ngOnInit() {
    // Khi component này được khởi tạo, cập nhật loại content
    this.infoTour.setCurrentSection('video');
  }
}
