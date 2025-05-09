import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.scss',
})
export class TourListComponent {
  @Input() title = 'anh-bia/tour-du-lich.jpg';
}
