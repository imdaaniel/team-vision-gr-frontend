import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
  standalone: true,
})
export class IconComponent {
  @Input() icon = 'search';
}
