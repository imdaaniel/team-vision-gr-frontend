import { Component } from '@angular/core';
import { ShowAuthedDirective } from '../../../shared/directives/show-authed.directive';
import { SearchInputComponent } from '../../../shared/components/inputs/search-input/search-input.component';
import { IconComponent } from '../../../shared/components/icons/icon.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [
    ShowAuthedDirective,
    // SearchInputComponent,
    IconComponent,
    RouterLink,
    RouterLinkActive,
    AsyncPipe,
    NgIf
  ],
  standalone: true,
})
export class HeaderComponent {
  
}
