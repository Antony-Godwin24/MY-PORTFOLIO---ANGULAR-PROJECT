import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternshipItem } from '../../models/portfolio.model';

interface AccentColor {
  color: string;
  bg: string;
}

@Component({
  selector: 'app-internships',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="internships-section">
      <div class="container">
        <!-- Header -->
        <div class="section-header">
          <span class="section-eyebrow">Experience</span>
          <h2 class="section-title">Internship Journey</h2>
          <p class="section-subtitle">
            Real-world software development experience across product companies and startups.
          </p>
        </div>

        <!-- Timeline -->
        <div class="timeline">
          @for (intern of internships; track intern.slug; let i = $index) {
            @let accent = getAccent(intern.slug);
            <div class="timeline-item">
              <!-- Timeline Indicator -->
              <div class="timeline-left">
                <div
                  class="timeline-dot"
                  [style.backgroundColor]="accent.color"
                  [style.boxShadow]="'0 0 0 4px ' + accent.bg"
                ></div>
                @if (i < internships.length - 1) {
                  <div class="timeline-line"></div>
                }
              </div>

              <!-- Content Card -->
              <div class="card">
                <div class="card-strip" [style.backgroundColor]="accent.color"></div>

                <div class="card-content">
                  <div class="card-header">
                    <div class="company-role-block">
                      <div class="company-row">
                        <h3 class="company-name">{{ intern.company }}</h3>
                        <span
                          class="index-chip"
                          [style.backgroundColor]="accent.bg"
                          [style.color]="accent.color"
                          [style.borderColor]="accent.color + '30'"
                        >
                          #{{ i + 1 }}
                        </span>
                      </div>
                      <div class="role-text" [style.color]="accent.color">
                        {{ intern.role }}
                      </div>
                    </div>

                    <div class="duration-badge">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span class="duration-text">{{ intern.duration }}</span>
                    </div>
                  </div>

                  <!-- Highlights List -->
                  @if (intern.highlights && intern.highlights.length > 0) {
                    <ul class="highlights-list">
                      @for (h of intern.highlights; track h) {
                        <li class="list-item">
                          <span class="bullet" [style.backgroundColor]="accent.color"></span>
                          <span class="list-text">{{ h }}</span>
                        </li>
                      }
                    </ul>
                  }

                  <!-- Tech Stack Chips -->
                  @if (intern.tech && intern.tech.length > 0) {
                    <div class="tech-chips">
                      @for (t of intern.tech; track t) {
                        <span class="tech-chip">{{ t }}</span>
                      }
                    </div>
                  }

                  <!-- Attached Documents -->
                  @if (intern.documents && intern.documents.length > 0) {
                    <div class="doc-links">
                      @for (doc of intern.documents; track doc.url) {
                        <a
                          [href]="doc.url"
                          target="_blank"
                          rel="noreferrer"
                          class="doc-link"
                          [style.color]="accent.color"
                        >
                          <span>{{ intern.slug === 'zoho' ? 'Completion Certificate' : doc.label }}</span>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      }
                    </div>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .internships-section {
      background-color: #f7f8fa;
      padding: 6rem 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .timeline {
      display: flex;
      flex-direction: column;
    }

    .timeline-item {
      display: flex;
      gap: 2rem;
    }

    .timeline-left {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
      padding-top: 1.8rem;
    }

    .timeline-dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      flex-shrink: 0;
      z-index: 1;
    }

    .timeline-line {
      flex: 1;
      width: 2px;
      background-color: #e8e8e8;
      margin-top: 0.5rem;
      min-height: 40px;
    }

    .card {
      flex: 1;
      background-color: #ffffff;
      border: 1px solid #e8e8e8;
      border-radius: 16px;
      overflow: hidden;
      margin-bottom: 2rem;
      transition: transform 160ms ease, box-shadow 160ms ease;
    }

    .card:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.07);
    }

    .card-strip {
      height: 3px;
      width: 100%;
    }

    .card-content {
      padding: 1.75rem;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 1.25rem;
    }

    .company-role-block {
      flex: 1;
    }

    .company-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .company-name {
      font-weight: 800;
      font-size: 1.2rem;
      color: #1a1a1a;
      line-height: 1.2;
    }

    .index-chip {
      font-size: 0.72rem;
      font-weight: 800;
      padding: 2px 8px;
      border-radius: 6px;
      border: 1px solid;
    }

    .role-text {
      font-weight: 700;
      font-size: 0.9rem;
      margin-top: 0.4rem;
    }

    .duration-badge {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: #f5f5f5;
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      padding: 0.45rem 0.9rem;
      flex-shrink: 0;
    }

    .duration-text {
      font-size: 0.8rem;
      color: #666666;
      font-weight: 600;
      white-space: nowrap;
    }

    .highlights-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .list-item {
      display: flex;
      align-items: flex-start;
      gap: 0.8rem;
    }

    .bullet {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      flex-shrink: 0;
      margin-top: 0.55rem;
    }

    .list-text {
      font-size: 0.9rem;
      color: #444444;
      line-height: 1.6;
    }

    .tech-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1.25rem;
    }

    .tech-chip {
      background-color: #f5f5f5;
      color: #444444;
      border: 1px solid #e0e0e0;
      font-weight: 600;
      font-size: 0.78rem;
      border-radius: 6px;
      padding: 0.25rem 0.65rem;
    }

    .doc-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-top: 1.25rem;
    }

    .doc-link {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.85rem;
      font-weight: 700;
      text-decoration: none;
    }

    .doc-link:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .timeline-item {
        gap: 1.25rem;
      }
      .card-content {
        padding: 1.25rem;
      }
    }
  `]
})
export class InternshipsComponent {
  @Input({ required: true }) internships: InternshipItem[] = [];

  private readonly accents: Record<string, AccentColor> = {
    'zoho': { color: '#e84c2b', bg: '#fef0ed' },
    'amizhth-techno-solutions': { color: '#2563eb', bg: '#eff6ff' },
    'techpuram': { color: '#00a86b', bg: '#f0fdf4' },
  };

  getAccent(slug: string): AccentColor {
    return this.accents[slug] || { color: '#555555', bg: '#f5f5f5' };
  }
}
