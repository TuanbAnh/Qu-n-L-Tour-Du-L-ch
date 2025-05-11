import { Component, Input, OnInit } from '@angular/core';
import { infoTour } from '../../../service/infoTour.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-generic-sv',
  templateUrl: './router-generic-sv.component.html',
  styleUrl: './router-generic-sv.component.scss',
})
export class RouterGenericSvComponent implements OnInit {
  @Input() coverPhoto: string = 'anh-bia/tour-du-lich.jpg';

  currentSection: string = '';

  constructor(public infoTour: infoTour, private route: ActivatedRoute) {}

  ngOnInit() {
    // Lấy section từ service
    this.currentSection = this.infoTour.getCurrentSection();

    // Nếu không có section trong service, thì xác định dựa trên URL trước đó
    if (!this.currentSection) {
      const slug = this.route.snapshot.paramMap.get('slug');

      // Kiểm tra trong từng danh sách để xác định loại nội dung
      // Tìm trong videoList
      const foundInVideo = this.infoTour.videoList.find(
        (item) => this.slugify(item.title) === slug
      );

      if (foundInVideo) {
        this.currentSection = 'video';
      } else {
        // Tìm trong traiNghiem
        const foundInTraiNghiem = this.infoTour.traiNghiem.find(
          (item: any) => this.slugify(item.title) === slug
        );

        if (foundInTraiNghiem) {
          this.currentSection = 'trai-nghiem';
        } else {
          // Mặc định nếu không tìm thấy
          this.currentSection = 'trai-nghiem';
        }
      }

      // Cập nhật lại service
      this.infoTour.setCurrentSection(this.currentSection);
    }

    console.log(
      'RouterGenericSvComponent - currentSection:',
      this.currentSection
    );
  }

  // Sao chép hàm slugify để sử dụng
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
