import { Component } from '@angular/core';
import { infoTour } from '../../../service/infoTour.service';

@Component({
  selector: 'app-info-tour',
  templateUrl: './info-tour.component.html',
  styleUrl: './info-tour.component.scss',
})
export class InfoTourComponent {
  currentImageIndex: number | null = 0;

  constructor(public infoTour: infoTour) {}

  onImageChanged(index: number): void {
    this.currentImageIndex = index;
    console.log(`Image changed to index ${index}`);
  }
}
