import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss',
})
export class SlideComponent {
  images: string[] = [
    // 'https://www.vietnamtravelgroup.com.vn/image-process/get-image-v3?path=/datafiles/32985/upload/images/banner/banner-slide-1%281%29.jpg&width=0',
    // 'https://www.vietnamtravelgroup.com.vn/image-process/get-image-v3?path=/datafiles/32985/upload/images/banner/Banner%20Slider%20TRungQuocOp5.jpg&width=0',
    'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/banner/Banner-slider-3.png?t=1717686904',
    'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/banner/Banner-slider-2.png?t=1717686701',
    'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/banner/Banner-slider-4.png?t=1717686875',
    'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/banner/Banner-slider-5.png?t=1717686984',
    'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/banner/Banner-slider-1.png?t=1717686516',
    'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/banner/Banner-slider-6.png?t=1717687014',
  ];
  active = 0;
  lengthItems = this.images.length - 1;
  refreshInterval: any;

  @ViewChild('slider', { static: true }) slider!: ElementRef;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  next(): void {
    this.active = this.active + 1 <= this.lengthItems ? this.active + 1 : 0;
    this.reloadSlider();
  }

  prev(): void {
    this.active = this.active - 1 >= 0 ? this.active - 1 : this.lengthItems;
    this.reloadSlider();
  }

  goToSlide(index: number): void {
    this.active = index;
    this.reloadSlider();
  }

  reloadSlider(): void {
    this.slider.nativeElement.style.left = -this.getSlideOffset() + 'px';
    this.restartAutoSlide();
  }

  getSlideOffset(): number {
    const itemWidth =
      this.slider.nativeElement.querySelector('.item')?.offsetWidth || 0;
    return this.active * itemWidth;
  }

  startAutoSlide(): void {
    this.refreshInterval = setInterval(() => this.next(), 3000);
  }

  restartAutoSlide(): void {
    clearInterval(this.refreshInterval);
    this.startAutoSlide();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.reloadSlider();
  }
}
