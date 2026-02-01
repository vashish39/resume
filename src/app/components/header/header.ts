import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  name = signal('Hello World!');
  title = signal('Web Developer / Web Designer');
  profileImage = signal('img.jpg');

  socialLinks = signal([
    { icon: 'email', url: 'mailto:hello@example.com', label: 'Email' },
    { icon: 'work', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'code', url: 'https://github.com', label: 'GitHub' }
  ]);
}
