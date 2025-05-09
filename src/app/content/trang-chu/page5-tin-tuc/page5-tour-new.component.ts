import { Component } from '@angular/core';
import { infoTour } from '../../../service/infoTour.service';

@Component({
  selector: 'app-page5-tour-new',
  templateUrl: './page5-tour-new.component.html',
  styleUrls: ['./page5-tour-new.component.scss'],
})
export class Page5TourNewComponent {
  arr = [
    {
      title:
        'Những Lễ Hội Truyền Thống Nổi Bật Không Thể Bỏ Qua Khi Du Lịch Việt Nam',
      date: '24/04/2025',
      content:
        'Việt Nam không chỉ hấp dẫn du khách bởi cảnh quan thiên nhiên tươi đẹp...',
      img: 'test/1.jpg',
    },
    {
      title:
        'Lịch cấm đường ngày 25 4 tại TP HCM? Danh sách tuyến đường cấm TPHCM ngày 25 4 phục vụ 30 4?',
      date: '26/04/2025',
      content:
        'Bảo đảm giao thông đường bộ được trật tự, an toàn, thông suốt, góp phần phát triển kinh tế - xã hội, bảo đảm quốc phòng, an ninh và bảo vệ môi trường; phòng ngừa vi phạm pháp luật về trật tự, an toàn giao thông đường bộ, tai nạn giao thông đường bộ và ùn tắc giao thông; bảo vệ tính mạng, sức khỏe, tài sản của cá nhân và tài sản của cơ quan, tổ chức. c trật tự, an toàn, thông suốt, góp phần phát triển kinh tế - xã hội, bảo đảm quốc phòng, an ninh và bảo vệ môi trường; phòng ngừa vi phạm pháp luật về trật tự, an toàn giao thông đường bộ, tai nạn giao thông đường bộ và ùn tắc giao thông; bảo vệ tính mạng, sức khỏe, tài sản của cá nhân và tài sản của cơ quan, tổ chức.',
      img: 'test/2.jpg',
    },
    {
      title: 'Tên bài viết 4',
      date: '26/04/2025',
      content: 'Nội dung bài viết 4...',
      img: 'test/3.jpg',
    },
    {
      title: 'Tên bài viết 5',
      date: '26/04/2025',
      content: 'Nội dung bài viết 5...',
      img: 'test/4.jpg',
    },
    {
      title: 'Tên bài viết 6',
      date: '26/04/2025',
      content: 'Nội dung bài viết 5...',
      img: 'test/5.jpg',
    },
    {
      title: 'Tên bài viết 7',
      date: '26/04/2025',
      content: 'Nội dung bài viết 5...',
      img: 'test/6.jpg',
    },
  ];

  hoveredIndex: number | null = null;

  constructor(public infoTour: infoTour) {}

  onMouseEnter(idx: number) {
    this.hoveredIndex = idx;
  }

  onMouseLeave() {
    this.hoveredIndex = null;
  }
}
