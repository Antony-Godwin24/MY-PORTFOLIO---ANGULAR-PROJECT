import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillGroup } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills-section">
      <div class="container">
        <!-- Header -->
        <div class="section-header">
          <span class="section-eyebrow">Skills</span>
          <h2 class="section-title">Technical Capabilities</h2>
          <p class="section-subtitle">
            Core technologies from hands-on project and internship experience.
          </p>
        </div>

        <!-- Skills Grid -->
        <div class="skills-grid">
          @for (group of skills; track group.title) {
            <div class="skill-card">
              <div class="card-header">
                <div
                  class="icon-box"
                  [style.backgroundColor]="group.bgColor"
                  [style.borderColor]="group.color + '22'"
                >
                  <!-- SVG Icons per Group -->
                  @switch (group.title) {
                    @case ('Languages') {
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" [attr.stroke]="group.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    }
                    @case ('Frontend') {
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" [attr.stroke]="group.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    }
                    @case ('Backend') {
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" [attr.stroke]="group.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                      </svg>
                    }
                    @case ('Database') {
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" [attr.stroke]="group.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                      </svg>
                    }
                    @default {
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" [attr.stroke]="group.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                      </svg>
                    }
                  }
                </div>
                <span class="group-title" [style.color]="group.color">
                  {{ group.title }}
                </span>
              </div>

              <div class="chips-list">
                @for (item of group.items; track item) {
                  <span
                    class="skill-chip"
                    [style.--hover-color]="group.color"
                  >
                    {{ item }}
                  </span>
                }
              </div>
            </div>
          }
        </div>

        <!-- AWS Cert Highlight -->
        <div class="cert-highlight">
          <div class="cert-dot"></div>
          <div class="cert-text">
            <strong class="highlight-brand">AWS Certified Cloud Practitioner</strong>
            — Validated cloud fundamentals and foundational AWS services knowledge.
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
      background-color: #ffffff;
      padding: 6rem 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .skill-card {
      background-color: #ffffff;
      border: 1px solid #e8e8e8;
      border-radius: 14px;
      padding: 1.75rem;
      transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
    }

    .skill-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.07);
      border-color: #d0d0d0;
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.25rem;
    }

    .icon-box {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      border: 1px solid transparent;
      display: grid;
      place-items: center;
      flex-shrink: 0;
    }

    .group-title {
      font-weight: 800;
      font-size: 0.92rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .chips-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
    }

    .skill-chip {
      background-color: #f5f5f5;
      color: #333333;
      border: 1px solid #e8e8e8;
      font-weight: 600;
      font-size: 0.83rem;
      border-radius: 6px;
      padding: 0.35rem 0.75rem;
      transition: all 160ms ease;
      cursor: default;
    }

    .skill-chip:hover {
      background-color: var(--hover-color);
      color: #ffffff;
      border-color: var(--hover-color);
    }

    .cert-highlight {
      display: flex;
      align-items: center;
      gap: 1rem;
      background-color: #fef0ed;
      border: 1px solid rgba(232, 76, 43, 0.2);
      border-radius: 12px;
      padding: 1.25rem 1.75rem;
    }

    .cert-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #e84c2b;
      flex-shrink: 0;
    }

    .cert-text {
      font-size: 0.9rem;
      color: #444444;
      line-height: 1.6;
    }

    .highlight-brand {
      color: #e84c2b;
    }

    @media (max-width: 992px) {
      .skills-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SkillsComponent {
  @Input({ required: true }) skills: SkillGroup[] = [];
}
