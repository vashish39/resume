import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { NavbarComponent } from './components/navbar/navbar';
import { EducationComponent } from './components/education/education';
import { ExperienceComponent } from './components/experience/experience';
import { SkillsComponent } from './components/skills/skills';
import { PortfolioComponent } from './components/portfolio/portfolio';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    NavbarComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    PortfolioComponent,
    ScrollToTopComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
