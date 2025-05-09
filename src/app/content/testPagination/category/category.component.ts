import { Component, Input, OnInit } from '@angular/core';
import { infoTour } from '../../../service/infoTour.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() title: any = 'Chua co tieu de';

  constructor(public infoTour: infoTour) {}

  news: any = [];
  ngOnInit(): void {
    if (this.infoTour.news && this.infoTour.news.length) {
      const shuffled = [...this.infoTour.news].sort(() => Math.random() - 0.5);
      this.news = shuffled.slice(0, 3);
    }
  }

  tourList = ['tour', 'tour xuyen quoc da', 'tour trong nuoc', 'tour quoc te'];
}
