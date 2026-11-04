import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from './services/portfolio.service';
import { PortfolioData } from './models/portfolio.model';

import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InternshipsComponent } from './components/internships/internships.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { HackathonsComponent } from './components/hackathons/hackathons.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    NavbarComponent,
    HeroComponent,
    EducationComponent,
    SkillsComponent,
    InternshipsComponent,
    ProjectsComponent,
    CertificatesComponent,
    HackathonsComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly portfolioService = inject(PortfolioService);

  data: PortfolioData | null = null;
  error = '';
  showLoader = true;

  ngOnInit(): void {
    this.portfolioService.getData().subscribe({
      next: (portfolioData) => {
        this.data = portfolioData;
        setTimeout(() => {
          this.showLoader = false;
          this.handleInitialScroll();
        }, 800);
      },
      error: (err) => {
        this.error = err?.message || 'Unable to load portfolio data.';
        this.showLoader = false;
      }
    });
  }

  private handleInitialScroll(): void {
    if (!window.location.hash) return;
    const id = window.location.hash.replace('#', '');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  }
}
