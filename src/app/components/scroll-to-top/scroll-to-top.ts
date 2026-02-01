import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ScrollService } from '../../services/scroll';

@Component({
  selector: 'app-scroll-to-top',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.scss',
})
export class ScrollToTopComponent {
  private scrollService = inject(ScrollService);

  isVisible = this.scrollService.isScrolled;

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }
}
