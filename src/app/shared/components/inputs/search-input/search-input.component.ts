import { Component, Input } from '@angular/core';
import { IconComponent } from '../../icons/icon.component';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
  imports: [
    IconComponent,
  ],
  standalone: true,
})
export class SearchInputComponent {
  @Input() placeholder = 'Pesquise aqui...';
  @Input() icon = 'search';
}
