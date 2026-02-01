import { Component, signal, inject, AfterViewInit, ElementRef, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollService } from '../../services/scroll';

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [MatIconModule, MatButtonModule, MatDialogModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class PortfolioComponent implements AfterViewInit {
  private elementRef = inject(ElementRef);
  private scrollService = inject(ScrollService);
  private platformId = inject(PLATFORM_ID);

  portfolioItems = signal<PortfolioItem[]>([
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack shopping platform with payment integration',
      image: 'img.jpg',
      tags: ['Angular', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool',
      image: 'img.jpg',
      tags: ['React', 'Firebase', 'Material UI'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking with forecasts',
      image: 'img.jpg',
      tags: ['TypeScript', 'API Integration', 'Charts'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Social Media Analytics',
      description: 'Dashboard for social media performance metrics',
      image: 'img.jpg',
      tags: ['Angular', 'D3.js', 'Python'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio template',
      image: 'img.jpg',
      tags: ['Angular', 'SCSS', 'Animations'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging with WebSocket',
      image: 'img.jpg',
      tags: ['Socket.io', 'Express', 'React'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ]);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = this.elementRef.nativeElement;
      this.scrollService.registerSection('portfolio', element.offsetTop);
    }
  }
}
