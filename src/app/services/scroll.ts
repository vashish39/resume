import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private platformId = inject(PLATFORM_ID);

  activeSection = signal<string>('');
  scrollY = signal<number>(0);
  isScrolled = signal<boolean>(false);

  private sectionOffsets: Map<string, number> = new Map();

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollListener();
    }
  }

  private initScrollListener(): void {
    window.addEventListener('scroll', () => {
      this.scrollY.set(window.scrollY);
      this.isScrolled.set(window.scrollY > 100);
      this.updateActiveSection();
    }, { passive: true });
  }

  registerSection(id: string, offset: number): void {
    this.sectionOffsets.set(id, offset);
  }

  updateSectionOffset(id: string, offset: number): void {
    this.sectionOffsets.set(id, offset);
  }

  private updateActiveSection(): void {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    let activeId = '';
    let minDistance = Infinity;

    this.sectionOffsets.forEach((offset, id) => {
      const distance = Math.abs(scrollPosition - offset);
      if (distance < minDistance && scrollPosition >= offset - 100) {
        minDistance = distance;
        activeId = id;
      }
    });

    if (activeId && activeId !== this.activeSection()) {
      this.activeSection.set(activeId);
    }
  }

  scrollToSection(sectionId: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
