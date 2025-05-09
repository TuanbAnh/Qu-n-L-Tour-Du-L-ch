import { Component, OnInit } from '@angular/core';
import { infoTour } from '../../../service/infoTour.service';

@Component({
  selector: 'app-trong-nuoc',
  templateUrl: './trong-nuoc.component.html',
  styleUrl: './trong-nuoc.component.scss',
})
export class TrongNuocComponent {
  constructor(public infoTour: infoTour) {}
}
