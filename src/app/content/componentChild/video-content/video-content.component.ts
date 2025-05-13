import { Component, Input, OnInit } from '@angular/core';
import { infoTour } from '../../../service/infoTour.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.scss'],
})
export class VideoContentComponent implements OnInit {
  @Input() title: any = 'Chưa có tiêu đề';

  tourId: string | null = null;
  tourData: any;
  safeVideoUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    public infoTour: infoTour,
    private sanitizer: DomSanitizer
  ) {}

  news: any = [];

  ngOnInit(): void {
    this.random3news();
    this.checkVideo();
  }

  checkVideo() {
    this.route.paramMap.subscribe((params) => {
      this.tourId = params.get('slug');
      console.log(`touid`, this.tourId);
      if (this.tourId) {
        const found = this.infoTour.videoList.find(
          (t: any) => this.slugify(t.title) === this.tourId
        );
        console.log(`foun:`, found);
        if (!found) {
          console.error('Không tìm thấy dữ liệu tour với slug:', this.tourId);
        } else {
          this.tourData = found;
          // xử lý URL an toàn cho iframe
          this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.tourData.video
          );
          //  mảng liên quan
          this.filterByCategory(this.tourData.category);
        }
      }
    });
  }

  // Mảng lọc các tour liên quan đến tour đang chọn
  filteredTourData: any[] = [];
  filterByCategory(category: string) {
    // Lọc theo category và loại bỏ phần tử đang được chọn
    this.filteredTourData = this.infoTour.videoList.filter(
      (video: any) =>
        video.category === category &&
        (this.tourData ? video.title !== this.tourData.title : true)
    );
  }

  slugify(title: string): string {
    if (!title) return '';
    return title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  }

  random3news() {
    if (this.infoTour.news && this.infoTour.news.length) {
      const shuffled = [...this.infoTour.news].sort(() => Math.random() - 0.5);
      this.news = shuffled.slice(0, 3);
    }
  }

  tourList = ['tour', 'tour xuyen quoc da', 'tour trong nuoc', 'tour quoc te'];
}
