import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { infoTour } from '../../../service/infoTour.service';

@Component({
  selector: 'app-page3-tour-new',
  templateUrl: './page3-tour-new.component.html',
  styleUrl: './page3-tour-new.component.scss',
})
export class Page3TourNewComponent implements AfterViewInit {
  constructor(public infoTour: infoTour, private renderer: Renderer2) {}

  @ViewChildren('tourCard', { read: ElementRef }) cards!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) {
            // Thêm class để kích hoạt animation domino
            this.renderer.addClass(el, 'is-visible');

            // Thêm animation domino chỉ một lần
            const animationEndHandler = () => {
              // Khi animation kết thúc, xóa class in-view và thêm class animation-completed
              this.renderer.removeClass(el, 'in-view');
              this.renderer.addClass(el, 'animation-completed');
              el.removeEventListener('animationend', animationEndHandler);
            };

            // Thêm class in-view để bắt đầu animation
            this.renderer.addClass(el, 'in-view');

            // Lắng nghe sự kiện kết thúc animation
            el.addEventListener('animationend', animationEndHandler);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.cards.forEach((card, idx) => {
      const html = card.nativeElement as HTMLElement;
      html.style.setProperty('--delay', `${idx * 0.15}s`);
      obs.observe(html);
    });
  }
}
