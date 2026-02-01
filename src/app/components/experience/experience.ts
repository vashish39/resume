import { Component, signal, inject, AfterViewInit, ElementRef, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { ScrollService } from '../../services/scroll';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  icon: string;
}

@Component({
  selector: 'app-experience',
  imports: [MatIconModule, MatChipsModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent implements AfterViewInit {
  private elementRef = inject(ElementRef);
  private scrollService = inject(ScrollService);
  private platformId = inject(PLATFORM_ID);

  experiences = signal<ExperienceItem[]>([
    {
      company: 'Itiviti',
      role: 'Senior Software Developer',
      period: '2022 - Present',
      description: [
        'Led development of modern trading platform features',
        'Improved system performance by 40% through optimization',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['Angular', 'TypeScript', 'Java', 'Docker'],
      icon: 'code'
    },
    {
      company: 'Zunroof',
      role: 'Full Stack Developer',
      period: '2021 - 2022',
      description: [
        'Built responsive web applications for solar energy solutions',
        'Implemented RESTful APIs and microservices architecture',
        'Collaborated with design team for optimal user experience'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      icon: 'wb_sunny'
    },
    {
      company: 'MereExams',
      role: 'Frontend Developer',
      period: '2020 - 2021',
      description: [
        'Developed educational platform for online examinations',
        'Created interactive quiz components with real-time feedback',
        'Optimized application for mobile devices'
      ],
      technologies: ['Angular', 'SCSS', 'Firebase', 'RxJS'],
      icon: 'quiz'
    }
  ]);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = this.elementRef.nativeElement;
      this.scrollService.registerSection('experience', element.offsetTop);
    }
  }
}
