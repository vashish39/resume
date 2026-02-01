import { Component, signal, inject, AfterViewInit, ElementRef, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ScrollService } from '../../services/scroll';

interface Skill {
  name: string;
  percentage: number;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}

@Component({
  selector: 'app-skills',
  imports: [MatIconModule, MatProgressBarModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent implements AfterViewInit {
  private elementRef = inject(ElementRef);
  private scrollService = inject(ScrollService);
  private platformId = inject(PLATFORM_ID);

  isVisible = signal(false);

  skills = signal<Skill[]>([
    { name: 'HTML5', percentage: 95, icon: 'html', category: 'frontend' },
    { name: 'CSS3 / SCSS', percentage: 90, icon: 'css', category: 'frontend' },
    { name: 'JavaScript', percentage: 88, icon: 'javascript', category: 'frontend' },
    { name: 'TypeScript', percentage: 85, icon: 'code', category: 'frontend' },
    { name: 'Angular', percentage: 90, icon: 'angular', category: 'frontend' },
    { name: 'React', percentage: 75, icon: 'react', category: 'frontend' },
    { name: 'Node.js', percentage: 80, icon: 'dns', category: 'backend' },
    { name: 'Python', percentage: 70, icon: 'terminal', category: 'backend' },
    { name: 'Java', percentage: 75, icon: 'coffee', category: 'backend' },
    { name: 'MongoDB', percentage: 72, icon: 'storage', category: 'backend' },
    { name: 'Git', percentage: 88, icon: 'merge_type', category: 'tools' },
    { name: 'Docker', percentage: 70, icon: 'inventory_2', category: 'tools' }
  ]);

  frontendSkills = signal<Skill[]>([]);
  backendSkills = signal<Skill[]>([]);

  constructor() {
    const allSkills = this.skills();
    this.frontendSkills.set(allSkills.filter(s => s.category === 'frontend'));
    this.backendSkills.set([
      ...allSkills.filter(s => s.category === 'backend'),
      ...allSkills.filter(s => s.category === 'tools')
    ]);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = this.elementRef.nativeElement;
      this.scrollService.registerSection('skills', element.offsetTop);

      // Set up intersection observer for animation
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.isVisible.set(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(element);
    }
  }
}
