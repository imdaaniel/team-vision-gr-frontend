import { DatePipe } from '@angular/common';
// import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, RouterLink],
  standalone: true,
})
export class FooterComponent {
  
}
