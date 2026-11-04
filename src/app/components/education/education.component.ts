import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="education-section">
      <div class="container">
        <!-- Header -->
        <div class="section-header">
          <span class="section-eyebrow">Education</span>
          <h2 class="section-title">Academic Foundation</h2>
          <p class="section-subtitle">
            Grounded in computer science fundamentals with consistent academic excellence.
          </p>
        </div>

        <!-- Cards Grid -->
        <div class="cards-grid">
          @for (edu of education; track edu.id) {
            <div class="edu-card">
              <!-- Colored top bar -->
              <div class="card-top-bar" [style.backgroundColor]="edu.color"></div>

              <div class="card-body">
                <div class="card-header">
                  <div
                    class="icon-box"
                    [style.backgroundColor]="edu.color + '14'"
                    [style.borderColor]="edu.color + '30'"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      [attr.stroke]="edu.color"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>

                  <div class="header-text">
                    <div class="degree-row">
                      <span class="degree">{{ edu.degree }}</span>
                      @if (edu.current) {
                        <span
                          class="current-badge"
                          [style.backgroundColor]="edu.color + '15'"
                          [style.color]="edu.color"
                          [style.borderColor]="edu.color + '30'"
                        >
                          Current
                        </span>
                      }
                    </div>
                    <div class="institution">{{ edu.institution }}</div>
                    <div class="board">{{ edu.board }}</div>
                  </div>
                </div>

                <div class="divider"></div>

                <!-- Meta Row -->
                <div class="meta-row">
                  <div class="meta-item">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>{{ edu.duration }}</span>
                  </div>

                  <div class="meta-item">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{{ edu.location }}</span>
                  </div>

                  <div class="meta-item">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" [attr.stroke]="edu.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                    <span [style.color]="edu.color" class="score-text">{{ edu.score }}</span>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Strong Subjects Section -->
        <div class="subjects-box">
          <div class="subjects-title">Strong Academic Subjects</div>
          <div class="subjects-chips">
            @for (subj of strongSubjects; track subj) {
              <span class="subject-chip">{{ subj }}</span>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .education-section {
      background-color: #f7f8fa;
      padding: 6rem 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.75rem;
      margin-bottom: 2.5rem;
    }

    .edu-card {
      background-color: #ffffff;
      border-radius: 16px;
      border: 1px solid #e8e8e8;
      overflow: hidden;
      transition: transform 160ms ease, box-shadow 160ms ease;
    }

    .edu-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    }

    .card-top-bar {
      height: 4px;
      width: 100%;
    }

    .card-body {
      padding: 1.75rem;
    }

    .card-header {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .icon-box {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      border: 1px solid transparent;
      display: grid;
      place-items: center;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .header-text {
      flex: 1;
    }

    .degree-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .degree {
      font-weight: 800;
      font-size: 1rem;
      color: #1a1a1a;
      line-height: 1.3;
    }

    .current-badge {
      font-size: 0.72rem;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 12px;
      border: 1px solid;
    }

    .institution {
      font-size: 0.88rem;
      font-weight: 600;
      color: #333333;
      margin-top: 0.35rem;
    }

    .board {
      font-size: 0.8rem;
      color: #888888;
      margin-top: 0.2rem;
    }

    .divider {
      height: 1px;
      background-color: #f0f0f0;
      margin: 1.25rem 0;
    }

    .meta-row {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 0.82rem;
      color: #666666;
      font-weight: 500;
    }

    .score-text {
      font-weight: 700;
    }

    .subjects-box {
      background-color: #ffffff;
      border: 1px solid #e8e8e8;
      border-radius: 16px;
      padding: 2rem 2.25rem;
    }

    .subjects-title {
      font-weight: 700;
      font-size: 0.78rem;
      color: #1a1a1a;
      margin-bottom: 1.25rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .subjects-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .subject-chip {
      background-color: #f0f0f0;
      color: #333333;
      font-weight: 600;
      font-size: 0.88rem;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 0.45rem 1rem;
      transition: all 160ms ease;
    }

    .subject-chip:hover {
      background-color: #e84c2b;
      color: #ffffff;
      border-color: #e84c2b;
    }

    @media (max-width: 900px) {
      .cards-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class EducationComponent {
  @Input({ required: true }) education: EducationItem[] = [];
  @Input({ required: true }) strongSubjects: string[] = [];
}
