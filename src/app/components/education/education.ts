import { Component, signal, inject, AfterViewInit, ElementRef, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ScrollService } from '../../services/scroll';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  grade: string;
  icon: string;
}

@Component({
  selector: 'app-education',
  imports: [MatIconModule, MatCardModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationComponent implements AfterViewInit {
  private elementRef = inject(ElementRef);
  private scrollService = inject(ScrollService);
  private platformId = inject(PLATFORM_ID);

  educationItems = signal<EducationItem[]>([
    {
      degree: 'Bachelor of Technology',
      institution: 'Indian Institute of Technology',
      year: '2018 - 2022',
      grade: '8.5 CGPA',
      icon: 'school'
    },
    {
      degree: 'Higher Secondary',
      institution: 'Central Board of Secondary Education',
      year: '2016 - 2018',
      grade: '92%',
      icon: 'menu_book'
    },
    {
      degree: 'Secondary School',
      institution: 'Central Board of Secondary Education',
      year: '2014 - 2016',
      grade: '95%',
      icon: 'auto_stories'
    }
  ]);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = this.elementRef.nativeElement;
      this.scrollService.registerSection('education', element.offsetTop);
    }
  }
}
