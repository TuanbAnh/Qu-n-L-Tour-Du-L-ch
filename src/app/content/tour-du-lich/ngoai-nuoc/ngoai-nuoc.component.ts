import { Component } from '@angular/core';
import { infoTour } from '../../../service/infoTour.service';

@Component({
  selector: 'app-ngoai-nuoc',
  templateUrl: './ngoai-nuoc.component.html',
  styleUrl: './ngoai-nuoc.component.scss',
})
export class NgoaiNuocComponent {
  constructor(public infoTour: infoTour) {}
}
