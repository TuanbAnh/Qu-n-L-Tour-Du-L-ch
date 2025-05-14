import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

interface TourItem {
  img: string;
  title: string;
  date: string;
  cart: string;
  hotel: string;
  week: string;
  discount: number;
  original: number;
  quantity: number;
}

@Component({
  selector: 'app-tour-slider',
  templateUrl: './tour-slider.component.html',
  styleUrls: ['./tour-slider.component.scss'],
})
export class TourSliderComponent
  implements AfterViewInit, OnDestroy, OnChanges
{
  @ViewChild('thumbsContainer') thumbsContainer!: ElementRef;

  // Input properties for reusability
  @Input() images: string[] = [];
  @Input() timeSlider: number = 5; // Default to 5 seconds if not provided
  @Input() showThumbs: boolean = true;
  @Input() mainImageHeight: number = 400; // Default height in pixels
  @Input() thumbImageHeight: number = 90; // Default thumbnail height

  // Add new Input properties for width customization
  @Input() sliderWidth: string = '80%'; // Default width for the entire slider container
  @Input() thumbWidth: string = '20%'; // Default width for thumbnails

  // Output events
  @Output() imageChanged = new EventEmitter<number>();

  // Mảng đối tượng hình ảnh để hiển thị
  imageObject: { anhDaiDien: string }[] = [];

  currentIndex = 0;
  interval: any;

  // Cho việc kéo thả (dragging)
  isDragging = false;
  startX = 0;
  currentTranslate = 0;
  prevTranslate = 0;

  // Cho thumbnail container
  isThumbsDragging = false;
  thumbsStartX = 0;
  thumbsScrollLeft = 0;

  // Cho thumbs slider
  thumbsCurrentIndex = 0;
  maxVisibleThumbs = 4; // Số lượng thumbnail tối đa hiển thị
  shouldScrollThumbs = false; // Cờ để xác định có cần cuộn thumbnails hay không

  constructor() {}

  ngOnInit(): void {
    this.initializeImages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['images'] && !changes['images'].firstChange) {
      this.initializeImages();
    }

    if (changes['timeSlider'] && !changes['timeSlider'].firstChange) {
      this.resetAutoSlideTimer();
    }
  }

  initializeImages(): void {
    // Chuyển đổi mảng hình ảnh thành mảng đối tượng
    this.imageObject = this.images.map((img) => ({ anhDaiDien: img }));
    // Xác định xem có cần cuộn thumbnails hay không
    this.shouldScrollThumbs = this.imageObject.length > this.maxVisibleThumbs;
    this.startAutoSlide();
  }

  ngAfterViewInit(): void {
    if (this.imageObject.length > 0) {
      setTimeout(() => this.updateThumbsScroll(), 100);
    }
  }

  startAutoSlide() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.next();
    }, this.timeSlider * 1000);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.imageObject.length;
    this.updateThumbsScroll();
    this.resetAutoSlideTimer();
    this.emitCurrentImage();
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.imageObject.length) %
      this.imageObject.length;
    this.updateThumbsScroll();
    this.resetAutoSlideTimer();
    this.emitCurrentImage();
  }

  selectImage(index: number) {
    this.currentIndex = index;
    this.updateThumbsScroll();
    this.resetAutoSlideTimer();
    this.emitCurrentImage();
  }

  emitCurrentImage() {
    this.imageChanged.emit(this.currentIndex);
  }

  resetAutoSlideTimer() {
    clearInterval(this.interval);
    this.startAutoSlide();
  }

  updateThumbsScroll() {
    if (!this.thumbsContainer || !this.showThumbs) return;

    if (this.shouldScrollThumbs) {
      // Cập nhật vị trí của thumbs slider
      // Xác định index của thumbnail đầu tiên trong slider dựa vào vị trí hiện tại
      if (
        this.currentIndex >=
        this.thumbsCurrentIndex + this.maxVisibleThumbs
      ) {
        // Nếu chọn ảnh nằm ngoài bên phải vùng hiển thị
        this.thumbsCurrentIndex = Math.min(
          this.currentIndex - this.maxVisibleThumbs + 1,
          this.imageObject.length - this.maxVisibleThumbs
        );
      } else if (this.currentIndex < this.thumbsCurrentIndex) {
        // Nếu chọn ảnh nằm ngoài bên trái vùng hiển thị
        this.thumbsCurrentIndex = this.currentIndex;
      }

      // Cập nhật vị trí cuộn
      const container = this.thumbsContainer.nativeElement;
      const thumbWidth = container.offsetWidth / this.maxVisibleThumbs;
      const scrollPosition = this.thumbsCurrentIndex * thumbWidth;

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    } else {
      // Hành vi cũ khi có ít hơn hoặc bằng maxVisibleThumbs ảnh
      const container = this.thumbsContainer.nativeElement;
      const thumbs = container.querySelectorAll('.thumb');

      if (!thumbs || thumbs.length === 0) return;

      // Tính toán vị trí cuộn để căn giữa thumbnail đang hoạt động
      if (thumbs[this.currentIndex]) {
        const thumbWidth = thumbs[0].offsetWidth;
        const thumbGap = 10; // Tương tự khoảng cách trong CSS
        const scrollPosition =
          (thumbWidth + thumbGap) * this.currentIndex -
          (container.offsetWidth - thumbWidth) / 2;

        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    }
  }

  // Các phương thức mới cho thumbnail slider
  nextThumbs() {
    if (!this.shouldScrollThumbs) return;

    const maxStartIndex = this.imageObject.length - this.maxVisibleThumbs;
    this.thumbsCurrentIndex = Math.min(
      this.thumbsCurrentIndex + 1,
      maxStartIndex
    );
    this.updateThumbsPosition();
  }

  prevThumbs() {
    if (!this.shouldScrollThumbs) return;

    this.thumbsCurrentIndex = Math.max(0, this.thumbsCurrentIndex - 1);
    this.updateThumbsPosition();
  }

  updateThumbsPosition() {
    if (!this.thumbsContainer || !this.showThumbs || !this.shouldScrollThumbs)
      return;

    const container = this.thumbsContainer.nativeElement;
    const thumbWidth = container.offsetWidth / this.maxVisibleThumbs;
    const scrollPosition = this.thumbsCurrentIndex * thumbWidth;

    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  }

  // Xử lý kéo chuột cho hình ảnh chính
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX;
    this.prevTranslate = this.currentTranslate;
    clearInterval(this.interval);
    event.preventDefault();
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;

    const currentX = event.clientX;
    const diff = currentX - this.startX;

    const target = event.currentTarget as HTMLElement;
    const containerWidth = target ? target.offsetWidth : 0;
    const dragPercentage = (diff / containerWidth) * 100;

    const maxDragPercent = 25; // Giới hạn kéo ở 25% để UX tốt hơn
    const limitedDrag = Math.max(
      Math.min(dragPercentage, maxDragPercent),
      -maxDragPercent
    );

    this.currentTranslate = this.prevTranslate + limitedDrag;
    this.updateSliderPosition();
  }

  onMouseUp() {
    if (!this.isDragging) return;

    const moveThreshold = 15; // Ngưỡng phần trăm để kích hoạt chuyển slide

    if (this.currentTranslate - this.prevTranslate > moveThreshold) {
      this.prev();
    } else if (this.currentTranslate - this.prevTranslate < -moveThreshold) {
      this.next();
    }

    this.isDragging = false;
    this.currentTranslate = 0;
    this.prevTranslate = 0;
    this.startAutoSlide();
  }

  // Hỗ trợ cảm ứng cho thiết bị di động
  onTouchStart(event: TouchEvent) {
    this.isDragging = true;
    this.startX = event.touches[0].clientX;
    this.prevTranslate = this.currentTranslate;
    clearInterval(this.interval);
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;

    const currentX = event.touches[0].clientX;
    const diff = currentX - this.startX;

    const target = event.currentTarget as HTMLElement;
    const containerWidth = target ? target.offsetWidth : 0;
    const dragPercentage = (diff / containerWidth) * 100;

    const maxDragPercent = 25;
    const limitedDrag = Math.max(
      Math.min(dragPercentage, maxDragPercent),
      -maxDragPercent
    );

    this.currentTranslate = this.prevTranslate + limitedDrag;
    this.updateSliderPosition();
  }

  onTouchEnd() {
    if (!this.isDragging) return;

    const moveThreshold = 15;

    if (this.currentTranslate - this.prevTranslate > moveThreshold) {
      this.prev();
    } else if (this.currentTranslate - this.prevTranslate < -moveThreshold) {
      this.next();
    }

    this.isDragging = false;
    this.currentTranslate = 0;
    this.prevTranslate = 0;
    this.startAutoSlide();
  }

  updateSliderPosition() {
    const translateValue = -this.currentIndex * 100 + this.currentTranslate;
    const slider = document.querySelector('.main-image-slider') as HTMLElement;
    if (slider) {
      slider.style.transform = `translateX(${translateValue}%)`;
    }
  }

  // Xử lý sự kiện mouse cho thumbnails
  onThumbsMouseDown(event: MouseEvent) {
    if (!this.showThumbs) return;
    this.isThumbsDragging = true;
    this.thumbsStartX =
      event.pageX - this.thumbsContainer.nativeElement.offsetLeft;
    this.thumbsScrollLeft = this.thumbsContainer.nativeElement.scrollLeft;
    event.preventDefault();
  }

  onThumbsMouseMove(event: MouseEvent) {
    if (!this.isThumbsDragging || !this.showThumbs) return;

    const x = event.pageX - this.thumbsContainer.nativeElement.offsetLeft;
    const walk = (x - this.thumbsStartX) * 2; // Nhân với 2 để tăng tốc độ kéo
    this.thumbsContainer.nativeElement.scrollLeft =
      this.thumbsScrollLeft - walk;
  }

  onThumbsMouseUp() {
    this.isThumbsDragging = false;
  }

  // Xử lý sự kiện touch cho thumbnails
  onThumbsTouchStart(event: TouchEvent) {
    if (!this.showThumbs) return;
    const touch = event.touches[0];
    this.isThumbsDragging = true;
    this.thumbsStartX =
      touch.pageX - this.thumbsContainer.nativeElement.offsetLeft;
    this.thumbsScrollLeft = this.thumbsContainer.nativeElement.scrollLeft;
  }

  onThumbsTouchMove(event: TouchEvent) {
    if (!this.isThumbsDragging || !this.showThumbs) return;

    const touch = event.touches[0];
    const x = touch.pageX - this.thumbsContainer.nativeElement.offsetLeft;
    const walk = (x - this.thumbsStartX) * 2;
    this.thumbsContainer.nativeElement.scrollLeft =
      this.thumbsScrollLeft - walk;
  }

  onThumbsTouchEnd() {
    this.isThumbsDragging = false;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
