import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateItem } from '../../models/portfolio.model';

interface CertStyle {
  color: string;
  bg: string;
  borderColor: string;
}

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="certificates" class="certificates-section">
      <div class="container">
        <!-- Header -->
        <div class="section-header">
          <span class="section-eyebrow">Certificates</span>
          <h2 class="section-title">Verified Learning</h2>
          <p class="section-subtitle">
            Industry-recognized certifications validating applied technical knowledge.
          </p>
        </div>

        <!-- Cards Grid -->
        <div class="certs-grid">
          @for (cert of certificates; track cert.slug; let i = $index) {
            @let cs = getCertStyle(cert.slug);
            @let media = cert.media && cert.media.length > 0 ? cert.media[0] : null;
            <div class="cert-card" [style.borderLeft]="'4px solid ' + cs.color">
              <!-- Top Row: Icon + Index -->
              <div class="card-top">
                <div
                  class="icon-box"
                  [style.backgroundColor]="cs.bg"
                  [style.borderColor]="cs.borderColor"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" [attr.stroke]="cs.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <span class="cert-index" [style.color]="cs.color">0{{ i + 1 }}</span>
              </div>

              <h3 class="cert-title">{{ cert.title }}</h3>

              <div class="issuer-row">
                <span
                  class="issuer-chip"
                  [style.backgroundColor]="cs.bg"
                  [style.color]="cs.color"
                  [style.borderColor]="cs.borderColor"
                >
                  {{ cert.issuedBy }}
                </span>
              </div>

              <div class="date-row">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span class="date-text">{{ cert.date }}</span>
              </div>

              @if (cert.summary) {
                <p class="summary-text">{{ cert.summary }}</p>
              }

              <!-- Action Button -->
              @if (media) {
                @if (media.type === 'pdf') {
                  <a
                    [href]="media.url"
                    target="_blank"
                    rel="noreferrer"
                    class="cert-btn"
                    [style.color]="cs.color"
                    [style.borderColor]="cs.color"
                    [style.--hover-bg]="cs.bg"
                  >
                    <span>View Certificate</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                }
                @if (media.type === 'image') {
                  <button
                    class="cert-btn"
                    [style.color]="cs.color"
                    [style.borderColor]="cs.color"
                    [style.--hover-bg]="cs.bg"
                    (click)="activeImage = media.url"
                  >
                    <span>Preview</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </button>
                }
              }
            </div>
          }
        </div>
      </div>

      <!-- Image Preview Modal -->
      @if (activeImage) {
        <div class="modal-backdrop" (click)="activeImage = null">
          <div class="image-modal-card" (click)="$event.stopPropagation()">
            <button class="image-close-btn" (click)="activeImage = null" aria-label="Close dialog">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img [src]="activeImage" alt="Certificate Preview" class="preview-img" />
          </div>
        </div>
      }
    </section>
  `,
  styles: [`
    .certificates-section {
      background-color: #f7f8fa;
      padding: 6rem 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .certs-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.75rem;
    }

    .cert-card {
      background-color: #ffffff;
      border: 1px solid #e8e8e8;
      border-radius: 16px;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transition: transform 160ms ease, box-shadow 160ms ease;
    }

    .cert-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    }

    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .icon-box {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: grid;
      place-items: center;
      border: 1px solid transparent;
    }

    .cert-index {
      font-size: 2rem;
      font-weight: 900;
      opacity: 0.2;
      line-height: 1;
    }

    .cert-title {
      font-weight: 800;
      font-size: 1.2rem;
      color: #1a1a1a;
      line-height: 1.3;
    }

    .issuer-row {
      display: flex;
      align-items: center;
    }

    .issuer-chip {
      font-weight: 700;
      font-size: 0.78rem;
      border: 1px solid;
      border-radius: 6px;
      padding: 3px 8px;
    }

    .date-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .date-text {
      font-size: 0.82rem;
      color: #888888;
      font-weight: 600;
    }

    .summary-text {
      font-size: 0.88rem;
      color: #555555;
      line-height: 1.65;
    }

    .cert-btn {
      align-self: flex-start;
      border-radius: 8px;
      font-size: 0.82rem;
      font-weight: 700;
      padding: 0.5rem 1rem;
      border: 1px solid;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: transparent;
      margin-top: 0.5rem;
      transition: all 160ms ease;
    }

    .cert-btn:hover {
      background-color: var(--hover-bg);
    }

    /* Modal */
    .image-modal-card {
      background-color: #1a1a1a;
      border-radius: 16px;
      padding: 1.5rem;
      max-width: 90vw;
      max-height: 90vh;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-close-btn {
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

    .image-close-btn:hover {
      background-color: #ffffff;
    }

    .preview-img {
      max-width: 100%;
      max-height: 82vh;
      object-fit: contain;
      border-radius: 8px;
    }

    @media (max-width: 768px) {
      .certs-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class CertificatesComponent {
  @Input({ required: true }) certificates: CertificateItem[] = [];

  activeImage: string | null = null;

  private readonly stylesMap: Record<string, CertStyle> = {
    'java-full-stack': {
      color: '#f5a623',
      bg: '#fffbeb',
      borderColor: 'rgba(245, 166, 35, 0.3)',
    },
    'aws-cloud-practitioner': {
      color: '#e84c2b',
      bg: '#fef0ed',
      borderColor: 'rgba(232, 76, 43, 0.25)',
    },
  };

  getCertStyle(slug: string): CertStyle {
    return this.stylesMap[slug] || this.stylesMap['aws-cloud-practitioner'];
  }
}
