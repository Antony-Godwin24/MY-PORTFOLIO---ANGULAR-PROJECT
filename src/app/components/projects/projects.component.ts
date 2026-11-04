import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects-section">
      <div class="container">
        <!-- Header -->
        <div class="section-header">
          <span class="section-eyebrow">Projects</span>
          <h2 class="section-title">What I've Built</h2>
          <p class="section-subtitle">
            Projects developed through hackathons, internships, and independent work.
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          @for (project of projects; track project.slug; let i = $index) {
            @let color = getProjectColor(project.slug);
            <div
              class="project-card"
              [style.borderTop]="'3px solid ' + color"
              (click)="openModal(project)"
              (keydown.enter)="openModal(project)"
              (keydown.space)="openModal(project)"
              tabindex="0"
              role="button"
            >
              <!-- Index & Badges -->
              <div class="card-top-row">
                <span class="card-index" [style.color]="color">0{{ i + 1 }}</span>
                <div class="badges-row">
                  @if (project.isConcept) {
                    <span class="badge concept-badge">PROPOSED CONCEPT</span>
                  }
                  @if (project.patentApplied) {
                    <span class="badge patent-badge">PATENT APPLIED (2024)</span>
                  }
                </div>
              </div>

              <h3 class="card-title">{{ project.title }}</h3>

              <div class="card-date">{{ project.dateRange }}</div>

              <p class="card-desc">
                {{ project.solution || project.summary || project.problem }}
              </p>

              <!-- Tech chips -->
              @if (project.tech && project.tech.length > 0) {
                <div class="tech-chips">
                  @for (t of project.tech.slice(0, 5); track t) {
                    <span class="tech-chip">{{ t }}</span>
                  }
                </div>
              }

              <!-- Actions footer -->
              <div class="card-footer">
                <div class="btn-group">
                  @if (project.github) {
                    <a
                      [href]="project.github"
                      target="_blank"
                      rel="noreferrer"
                      (click)="$event.stopPropagation()"
                      class="github-btn"
                      [style.backgroundColor]="color"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span>GitHub</span>
                    </a>
                  }
                  @if (project.live) {
                    <a
                      [href]="project.live"
                      target="_blank"
                      rel="noreferrer"
                      (click)="$event.stopPropagation()"
                      class="live-btn"
                      [style.color]="color"
                      [style.borderColor]="color"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span>Live</span>
                    </a>
                  }
                </div>

                <span class="card-hint" [style.color]="color">
                  Click to view details →
                </span>
              </div>
            </div>
          }
        </div>
      </div>

      <!-- Project Modal Dialog -->
      @if (selectedProject) {
        @let modalColor = getProjectColor(selectedProject.slug);
        <div class="modal-backdrop" (click)="closeModal()">
          <div class="modal-container" (click)="$event.stopPropagation()">
            <button class="modal-close" (click)="closeModal()" aria-label="Close dialog">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div class="modal-header">
              <div class="modal-badges">
                @if (selectedProject.isConcept) {
                  <span class="badge concept-badge">PROPOSED CONCEPT / PATENT WORK</span>
                }
                @if (selectedProject.patentApplied) {
                  <span class="badge patent-badge">PATENT APPLICATION FILED (NOV 2024)</span>
                }
              </div>

              <h2 class="modal-title">{{ selectedProject.title }}</h2>
              <div class="modal-date" [style.color]="modalColor">{{ selectedProject.dateRange }}</div>

              @if (selectedProject.isConcept) {
                <p class="concept-disclaimer">
                  * Proposed architecture &amp; research initiative — conceived as a patent application and symposium presentation rather than an actively deployed product.
                </p>
              }
            </div>

            <!-- Problem -->
            @if (selectedProject.problem) {
              <div class="modal-section">
                <div class="modal-label">Problem</div>
                <p class="modal-text">{{ selectedProject.problem }}</p>
              </div>
            }

            <!-- Solution -->
            @if (selectedProject.solution) {
              <div class="modal-section">
                <div class="modal-label">Solution</div>
                <p class="modal-text">{{ selectedProject.solution }}</p>
              </div>
            }

            <!-- Key Features -->
            @if (selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0) {
              <div class="modal-section">
                <div class="modal-label">Key Features</div>
                <ul class="features-list">
                  @for (feat of selectedProject.keyFeatures; track feat) {
                    <li>{{ feat }}</li>
                  }
                </ul>
              </div>
            }

            <!-- Technologies -->
            @if (selectedProject.tech && selectedProject.tech.length > 0) {
              <div class="modal-section">
                <div class="modal-label">Technologies</div>
                <div class="modal-tech-chips">
                  @for (t of selectedProject.tech; track t) {
                    <span
                      class="modal-chip"
                      [style.backgroundColor]="modalColor + '15'"
                      [style.color]="modalColor"
                      [style.borderColor]="modalColor + '30'"
                    >
                      {{ t }}
                    </span>
                  }
                </div>
              </div>
            }

            <!-- Action Links -->
            <div class="modal-actions">
              @if (selectedProject.github) {
                <a
                  [href]="selectedProject.github"
                  target="_blank"
                  rel="noreferrer"
                  class="primary-modal-btn"
                  [style.backgroundColor]="modalColor"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              }
              @if (selectedProject.live) {
                <a
                  [href]="selectedProject.live"
                  target="_blank"
                  rel="noreferrer"
                  class="outline-modal-btn"
                  [style.color]="modalColor"
                  [style.borderColor]="modalColor"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span>Live Site</span>
                </a>
              }
            </div>

            <!-- Screenshots Gallery -->
            @if (selectedProject.images && selectedProject.images.length > 0) {
              <div class="screenshots-grid">
                @for (img of selectedProject.images; track img; let idx = $index) {
                  <img
                    [src]="img"
                    [alt]="selectedProject.title + ' screenshot ' + (idx + 1)"
                    class="screenshot-img"
                  />
                }
              </div>
            }
          </div>
        </div>
      }
    </section>
  `,
  styles: [`
    .projects-section {
      background-color: #ffffff;
      padding: 6rem 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.75rem;
    }

    .project-card {
      background-color: #ffffff;
      border: 1px solid #e8e8e8;
      border-radius: 16px;
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      min-height: 350px;
      cursor: pointer;
      outline: none;
      transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
      border-color: #d1d5db;
    }

    .project-card:focus-visible {
      box-shadow: 0 0 0 3px rgba(232, 76, 43, 0.35);
    }

    .card-top-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.5rem;
    }

    .card-index {
      font-size: 2.4rem;
      font-weight: 900;
      line-height: 1;
      opacity: 0.2;
    }

    .badges-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .badge {
      font-weight: 800;
      font-size: 0.68rem;
      letter-spacing: 0.05em;
      border-radius: 6px;
      padding: 2px 7px;
      display: inline-block;
    }

    .concept-badge {
      background-color: #eff6ff;
      color: #1d4ed8;
      border: 1px solid #bfdbfe;
    }

    .patent-badge {
      background-color: #fffbeb;
      color: #92400e;
      border: 1px solid #fde68a;
    }

    .card-title {
      font-weight: 800;
      font-size: 1.1rem;
      color: #1a1a1a;
      line-height: 1.3;
      margin-bottom: 0.35rem;
    }

    .card-date {
      font-size: 0.8rem;
      color: #888888;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .card-desc {
      font-size: 0.88rem;
      color: #555555;
      line-height: 1.65;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 1rem;
    }

    .tech-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin-top: auto;
      margin-bottom: 1.25rem;
    }

    .tech-chip {
      background-color: #f5f5f5;
      color: #444444;
      border: 1px solid #e0e0e0;
      font-weight: 600;
      font-size: 0.75rem;
      border-radius: 6px;
      padding: 2px 7px;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 0.5rem;
      gap: 0.5rem;
    }

    .btn-group {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    .github-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      color: #ffffff;
      padding: 0.4rem 0.8rem;
      border-radius: 6px;
      font-size: 0.82rem;
      font-weight: 600;
      transition: filter 160ms ease;
    }

    .github-btn:hover {
      filter: brightness(0.9);
    }

    .live-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.35rem 0.75rem;
      border-radius: 6px;
      font-size: 0.82rem;
      font-weight: 600;
      border: 1px solid;
      background: transparent;
      transition: background-color 160ms ease;
    }

    .live-btn:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }

    .card-hint {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.02em;
      white-space: nowrap;
    }

    /* Modal Dialog Styles */
    .modal-container {
      background: #ffffff;
      border-radius: 16px;
      max-width: 800px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      padding: 2.5rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    .modal-close {
      position: absolute;
      right: 1.25rem;
      top: 1.25rem;
      background-color: #f5f5f5;
      border-radius: 8px;
      padding: 6px;
      color: #666;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 160ms ease;
    }

    .modal-close:hover {
      background-color: #e8e8e8;
      color: #1a1a1a;
    }

    .modal-header {
      border-bottom: 1px solid #e8e8e8;
      padding-bottom: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .modal-badges {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .modal-title {
      font-weight: 800;
      font-size: 1.6rem;
      color: #1a1a1a;
      line-height: 1.2;
    }

    .modal-date {
      font-weight: 700;
      font-size: 0.9rem;
      margin-top: 0.35rem;
    }

    .concept-disclaimer {
      margin-top: 0.75rem;
      font-size: 0.85rem;
      color: #64748b;
      font-style: italic;
    }

    .modal-section {
      margin-bottom: 1.5rem;
    }

    .modal-label {
      font-weight: 800;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #888888;
      margin-bottom: 0.5rem;
    }

    .modal-text {
      color: #444444;
      font-size: 0.95rem;
      line-height: 1.7;
    }

    .features-list {
      padding-left: 1.25rem;
      margin: 0;
      color: #444444;
      font-size: 0.95rem;
      line-height: 1.7;
    }

    .modal-tech-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }

    .modal-chip {
      padding: 0.3rem 0.75rem;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.82rem;
      border: 1px solid;
    }

    .modal-actions {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }

    .primary-modal-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: #ffffff;
      padding: 0.65rem 1.4rem;
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.9rem;
    }

    .outline-modal-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.65rem 1.4rem;
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.9rem;
      border: 1px solid;
      background: transparent;
    }

    .screenshots-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 2rem;
    }

    .screenshot-img {
      width: 100%;
      border-radius: 10px;
      border: 1px solid #e8e8e8;
      object-fit: cover;
      max-height: 200px;
    }

    @media (max-width: 960px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
      .modal-container {
        padding: 1.5rem;
      }
    }
  `]
})
export class ProjectsComponent {
  @Input({ required: true }) projects: ProjectItem[] = [];

  selectedProject: ProjectItem | null = null;

  private readonly colors: Record<string, string> = {
    'claridux': '#e84c2b',
    'internship-recommendation-engine': '#2563eb',
    'smart-water-can': '#00a86b',
  };

  getProjectColor(slug: string): string {
    return this.colors[slug] || '#e84c2b';
  }

  openModal(project: ProjectItem): void {
    this.selectedProject = project;
  }

  closeModal(): void {
    this.selectedProject = null;
  }
}
