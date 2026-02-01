import { Component, inject, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScrollService } from '../../services/scroll';
import { ThemeService } from '../../services/theme';

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  private scrollService = inject(ScrollService);
  private themeService = inject(ThemeService);

  activeSection = this.scrollService.activeSection;
  isScrolled = this.scrollService.isScrolled;
  currentTheme = this.themeService.currentTheme;

  isDarkMode = computed(() => this.currentTheme() === 'dark');

  navItems: NavItem[] = [
    { id: 'education', label: 'Education', icon: 'school' },
    { id: 'experience', label: 'Experience', icon: 'work' },
    { id: 'skills', label: 'Skills', icon: 'bar_chart' },
    { id: 'portfolio', label: 'Portfolio', icon: 'brush' }
  ];

  navigateTo(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }
}
