import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackathonItem, MediaItem } from '../../models/portfolio.model';

interface HackColor {
  color: string;
  bg: string;
  prize: string;
}

@Component({
  selector: 'app-hackathons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hackathons" class="hackathons-section">
      <div class="container">
        <!-- Header -->
        <div class="section-header">
          <span class="section-eyebrow">Hackathons &amp; Achievements</span>
          <h2 class="section-title">Competition Record</h2>
          <p class="section-subtitle">
            National-level hackathon wins and a patent application — proof of innovation under pressure.
          </p>
        </div>

        <!-- Patent Banner -->
        <div class="patent-banner">
          <div class="patent-dot">⚡</div>
          <div>
            <h3 class="patent-title">Patent Application Filed — Nov 2024</h3>
            <p class="patent-desc">
              "A System for Enhancing Quality of Water Can through QR Code" — Filed based on the Smart QR Water Can Monitoring System project.
            </p>
          </div>
        </div>

        <!-- Cards Grid -->
        <div class="hack-grid">
          @for (hack of hackathons; track hack.slug) {
            @let hc = getHackColor(hack.slug, hack.achievement);
            <div class="hack-card" [style.borderTop]="'3px solid ' + hc.color">
              <!-- Top Row: Icon + Prize -->
              <div class="card-top">
                <div class="icon-box" [style.backgroundColor]="hc.bg">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" [attr.stroke]="hc.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <span
                  class="prize-chip"
                  [style.backgroundColor]="hc.bg"
                  [style.color]="hc.color"
                  [style.borderColor]="hc.color + '30'"
                >
                  {{ hack.achievement || hc.prize }}
                </span>
              </div>

              <h3 class="event-name">{{ hack.event }}</h3>

              <!-- Meta -->
              <div class="meta-list">
                @if (hack.level) {
                  <div class="meta-row">
                    <span class="meta-dot" [style.backgroundColor]="hc.color"></span>
                    <span class="meta-text">{{ hack.level }}</span>
                  </div>
                }
                @if (hack.organizedBy) {
                  <div class="meta-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span class="meta-text">{{ hack.organizedBy }}</span>
                  </div>
                }
                @if (hack.date) {
                  <div class="meta-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span class="meta-text">{{ hack.date }}</span>
                  </div>
                }
              </div>

              @if (hack.project) {
                <div class="project-info">
                  Project: <strong>{{ hack.project }}</strong>
                </div>
              }

              @if (hack.summary) {
                <p class="summary-text">{{ hack.summary }}</p>
              }

              <!-- Media Button -->
              @if (hack.media && hack.media.length > 0) {
                <button
                  class="media-btn"
                  [style.color]="hc.color"
                  [style.borderColor]="hc.color"
                  [style.--hover-bg]="hc.bg"
                  (click)="openMedia(hack.media)"
                >
                  {{ hack.media.length > 1 ? 'View Photos (' + hack.media.length + ')' : 'View Certificate' }}
                </button>
              }
            </div>
          }
        </div>
      </div>

      <!-- Media Dialog -->
      @if (activeMediaSet.length > 0) {
        <div class="modal-backdrop" (click)="closeMedia()">
          <div class="media-modal-card" (click)="$event.stopPropagation()">
            <button class="modal-close" (click)="closeMedia()" aria-label="Close dialog">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            @if (activeMedia) {
              <img [src]="activeMedia.url" alt="Hackathon preview" class="main-media-img" />
            }

            @if (activeMediaSet.length > 1) {
              <div class="thumbnails-row">
                @for (item of activeMediaSet; track item.url; let i = $index) {
                  <button
                    class="thumb-btn"
                    [class.active-thumb]="i === activeIndex"
                    (click)="activeIndex = i"
                  >
                    <img [src]="item.url" [alt]="'Photo ' + (i + 1)" class="thumb-img" />
                  </button>
                }
              </div>
            }
          </div>
        </div>
      }
    </section>
  `,
  styles: [`
    .hackathons-section {
      background-color: #ffffff;
      padding: 6rem 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .patent-banner {
      display: flex;
      align-items: flex-start;
      gap: 1.25rem;
      background-color: #fffbeb;
      border: 1px solid rgba(245, 166, 35, 0.3);
      border-left: 4px solid #f5a623;
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 3.5rem;
    }

    .patent-dot {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: #f5a623;
      display: grid;
      place-items: center;
      flex-shrink: 0;
      font-size: 1.1rem;
    }

    .patent-title {
      font-weight: 800;
      font-size: 0.95rem;
      color: #92400e;
    }

    .patent-desc {
      margin-top: 0.35rem;
      font-size: 0.88rem;
      color: #a16207;
      line-height: 1.6;
    }

    .hack-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.75rem;
    }

    .hack-card {
      background-color: #ffffff;
      border: 1px solid #e8e8e8;
      border-radius: 16px;
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transition: transform 160ms ease, box-shadow 160ms ease;
    }

    .hack-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    }

    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .icon-box {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      display: grid;
      place-items: center;
    }

    .prize-chip {
      font-weight: 800;
      font-size: 0.78rem;
      border: 1px solid;
      border-radius: 6px;
      padding: 3px 8px;
    }

    .event-name {
      font-weight: 800;
      font-size: 1.15rem;
      color: #1a1a1a;
      line-height: 1.3;
    }

    .meta-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .meta-row {
      display: flex;
      align-items: flex-start;
      gap: 0.6rem;
    }

    .meta-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      flex-shrink: 0;
      margin-top: 0.35rem;
    }

    .meta-text {
      font-size: 0.83rem;
      color: #666666;
      line-height: 1.4;
    }

    .project-info {
      font-size: 0.88rem;
      color: #444444;
      font-weight: 500;
    }

    .summary-text {
      font-size: 0.85rem;
      color: #555555;
      line-height: 1.6;
      flex: 1;
    }

    .media-btn {
      border-radius: 8px;
      font-size: 0.82rem;
      font-weight: 700;
      align-self: flex-start;
      margin-top: auto;
      padding: 0.45rem 0.9rem;
      border: 1px solid;
      background: transparent;
      transition: all 160ms ease;
    }

    .media-btn:hover {
      background-color: var(--hover-bg);
    }

    /* Media Modal */
    .media-modal-card {
      background-color: #1a1a1a;
      border-radius: 16px;
      padding: 1.5rem;
      max-width: 90vw;
      max-height: 90vh;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .modal-close {
      position: absolute;
      right: 1rem;
      top: 1rem;
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1a1a1a;
      z-index: 2;
    }

    .modal-close:hover {
      background-color: #ffffff;
    }

    .main-media-img {
      max-width: 100%;
      max-height: 72vh;
      object-fit: contain;
      border-radius: 8px;
    }

    .thumbnails-row {
      display: flex;
      gap: 0.6rem;
      margin-top: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .thumb-btn {
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      background: none;
      padding: 0;
      transition: border-color 160ms ease;
    }

    .thumb-btn.active-thumb {
      border-color: #e84c2b;
    }

    .thumb-img {
      width: 80px;
      height: 54px;
      object-fit: cover;
      display: block;
    }

    @media (max-width: 960px) {
      .hack-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HackathonsComponent {
  @Input({ required: true }) hackathons: HackathonItem[] = [];

  activeMediaSet: MediaItem[] = [];
  activeIndex = 0;

  get activeMedia(): MediaItem | null {
    return this.activeMediaSet[this.activeIndex] || null;
  }

  private readonly colorsMap: Record<string, HackColor> = {
    'aura-24': { color: '#00a86b', bg: '#f0fdf4', prize: '3rd Place' },
    'techelite-26': { color: '#2563eb', bg: '#eff6ff', prize: '1st Place 🏆' },
    'zyron-26': { color: '#e84c2b', bg: '#fef0ed', prize: '1st Place 🏆' },
  };

  getHackColor(slug: string, fallbackPrize = ''): HackColor {
    return this.colorsMap[slug] || { color: '#e84c2b', bg: '#fef0ed', prize: fallbackPrize };
  }

  openMedia(items: MediaItem[]): void {
    this.activeMediaSet = items || [];
    this.activeIndex = 0;
  }

  closeMedia(): void {
    this.activeMediaSet = [];
    this.activeIndex = 0;
  }
}
