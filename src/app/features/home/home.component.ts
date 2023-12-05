import { Component } from '@angular/core';
import { SearchInputComponent } from '../../shared/components/inputs/search-input/search-input.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    SearchInputComponent,
    RouterLink,
    RouterLinkActive,
    NgFor
  ],
  standalone: true,
})
export class HomeComponent {
  projects = [
    {
      id: 1,
      name: 'Projeto-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam accumsan sodales. Nam blandit nibh leo, et laoreet arcu efficitur a.',
    },
    {
      id: 2,
      name: 'Projeto-02',
      description: 'Gutrum purus. Nullam pretium ex at augue consequat facilisis. Nam sem ipsum, sagittis vel dictum vel, vestibulum eget nisi. Vestibulum lacus arcu, facilisis et felis vitae, egestas lobortis lorem. Curabitur pharetra nunc nulla, a tincidunt tortor aliquet eu. Fusce justo massa, accumsan scelerisque mi sed, tempor ornare purus. Integer quis justo nul.',
    },
    {
      id: 3,
      name: 'Projeto-03',
      description: 'Maecenas vitae lectus mauris. Morbi dui nunc, tempor in nunc ac, ultricies vulputate odio.',
    },
    {
      id: 4,
      name: 'Projeto-04',
      description: 'Morbi auctor justo vel mi egestas, vel malesuada eros ultricies. Ut nec augue at metus scelerisque finibus. Duis tincidunt tellus magna, venenatis dictum tellus sollicitudin placerat.',
    },
    {
      id: 5,
      name: 'Projeto-05',
      description: 'Suspendisse interdum malesuada elit ut maximus. Praesent nec condimentum neque.',
    },
  ]
}
