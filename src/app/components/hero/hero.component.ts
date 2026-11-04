import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../models/portfolio.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero-section">
      <!-- Dark radial gradient background -->
      <div class="hero-bg"></div>

      <div class="hero-inner">
        <!-- LEFT: Text Content -->
        <div class="hero-copy">
          <!-- Zoho-style color dots row -->
          <div class="color-dots">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
            <span class="dot dot-blue"></span>
          </div>

          <div class="status-badge">
            Fresher · Open to Opportunities
          </div>

          <h1 class="hero-name">
            ANTONY<br />GODWIN S
          </h1>

          <div class="hero-tagline">
            Final-year CSE Student &amp; Full Stack Developer
          </div>

          <p class="hero-objective">
            {{ profile.objective }}
          </p>

          <!-- Contact Details Bar -->
          <div class="contact-bar">
            <div class="contact-item">
              <div class="contact-icon-circle loc-circle">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <div class="contact-label">Location</div>
                <div class="contact-value">Tiruchirappalli, TN</div>
              </div>
            </div>

            <div class="contact-divider"></div>

            <div class="contact-item">
              <div class="contact-icon-circle mail-circle">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <div class="contact-label">Email</div>
                <div class="contact-value">antonygodwin08&#64;gmail.com</div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="hero-actions">
            <button class="primary-btn" (click)="scrollTo('projects')">
              View My Work
            </button>
            <a
              [href]="profile.resumeUrl"
              download="ANTONY_GODWIN_S_RESUME.pdf"
              class="outline-btn"
            >
              Download Resume
            </a>
          </div>

          <!-- Social Links -->
          <div class="social-links">
            <a [href]="profile.links.github" target="_blank" rel="noreferrer" class="social-btn" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a [href]="profile.links.linkedin" target="_blank" rel="noreferrer" class="social-btn" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z"/>
              </svg>
            </a>
            <a [href]="profile.links.leetcode" target="_blank" rel="noreferrer" class="social-btn" aria-label="LeetCode">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
            </a>
            <a [href]="profile.links.email" class="social-btn" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <!-- RIGHT: Profile Photo & Floating Badges -->
        <div class="photo-wrapper">
          <div class="photo-bg"></div>
          <img
            [src]="profile.image"
            alt="ANTONY GODWIN S"
            class="profile-img"
          />

          <!-- Floating stat cards -->
          <div class="stat-card stat-card-1">
            <div class="stat-num">3+</div>
            <div class="stat-label">Internships</div>
          </div>

          <div class="stat-card stat-card-2">
            <div class="stat-num">1st</div>
            <div class="stat-label">Prize × 2 Hackathons</div>
          </div>
        </div>
      </div>

      <!-- Bottom fade to white -->
      <div class="fade-bottom"></div>
    </section>
  `,
  styles: [`
    .hero-section {
      position: relative;
      background-color: #1a1a1a;
      overflow: hidden;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse at 20% 50%, rgba(232, 76, 43, 0.12) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, rgba(37, 99, 235, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }

    .hero-inner {
      position: relative;
      z-index: 1;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      padding: 5rem 2rem;
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      align-items: center;
      gap: 3rem;
      min-height: calc(100vh - 72px);
    }

    .hero-copy {
      color: #ffffff;
      max-width: 600px;
    }

    .color-dots {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .status-badge {
      display: inline-block;
      margin-bottom: 1.5rem;
      background-color: rgba(232, 76, 43, 0.15);
      color: #ff8066;
      border: 1px solid rgba(232, 76, 43, 0.3);
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.02em;
      padding: 0.35rem 0.85rem;
      border-radius: 20px;
    }

    .hero-name {
      font-size: clamp(3.2rem, 6vw, 5.2rem);
      line-height: 0.94;
      color: #ffffff;
      font-weight: 900;
      letter-spacing: -0.03em;
    }

    .hero-tagline {
      margin-top: 1.5rem;
      font-size: clamp(1.1rem, 2.2vw, 1.3rem);
      color: #aaaaaa;
      font-weight: 500;
    }

    .hero-objective {
      margin-top: 1.25rem;
      color: #888888;
      font-size: 0.95rem;
      line-height: 1.75;
      max-width: 540px;
    }

    .contact-bar {
      margin-top: 2rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      padding: 10px 16px;
      gap: 1.5rem;
      max-width: 560px;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    .contact-icon-circle {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .loc-circle {
      background-color: rgba(245, 166, 35, 0.12);
      color: #f5a623;
    }

    .mail-circle {
      background-color: rgba(37, 99, 235, 0.12);
      color: #3b82f6;
    }

    .contact-label {
      font-size: 0.68rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #777777;
      font-weight: 700;
      line-height: 1.1;
    }

    .contact-value {
      font-size: 0.82rem;
      color: #e2e8f0;
      font-weight: 600;
      line-height: 1.3;
      margin-top: 2px;
    }

    .contact-divider {
      width: 1px;
      height: 28px;
      background-color: rgba(255, 255, 255, 0.08);
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      margin-top: 2.25rem;
      flex-wrap: wrap;
    }

    .primary-btn {
      background-color: #e84c2b;
      color: #ffffff;
      border-radius: 8px;
      padding: 0.8rem 1.8rem;
      font-weight: 700;
      font-size: 0.95rem;
      box-shadow: 0 4px 20px rgba(232, 76, 43, 0.35);
      transition: all 160ms ease;
    }

    .primary-btn:hover {
      background-color: #c73d20;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(232, 76, 43, 0.4);
    }

    .outline-btn {
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: #ffffff;
      border-radius: 8px;
      padding: 0.8rem 1.8rem;
      font-weight: 600;
      font-size: 0.95rem;
      transition: all 160ms ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .outline-btn:hover {
      border-color: rgba(255, 255, 255, 0.55);
      background-color: rgba(255, 255, 255, 0.06);
      transform: translateY(-2px);
    }

    .social-links {
      display: flex;
      gap: 0.8rem;
      margin-top: 2rem;
    }

    .social-btn {
      width: 38px;
      height: 38px;
      color: #aaaaaa;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 160ms ease;
    }

    .social-btn:hover {
      color: #ffffff;
      background-color: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.25);
      transform: translateY(-2px);
    }

    .photo-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      height: 70vh;
      max-height: 650px;
    }

    .photo-bg {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 85%;
      height: 90%;
      border-radius: 50% 50% 0 0;
      background: linear-gradient(180deg, rgba(232, 76, 43, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%);
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    .profile-img {
      position: relative;
      z-index: 1;
      width: 420px;
      height: 560px;
      max-width: 100%;
      object-fit: cover;
      object-position: top center;
      filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4));
    }

    .stat-card {
      position: absolute;
      border-radius: 12px;
      padding: 0.9rem 1.25rem;
      text-align: center;
      z-index: 2;
    }

    .stat-card-1 {
      left: -10px;
      bottom: 80px;
      background-color: #ffffff;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
      min-width: 95px;
    }

    .stat-card-2 {
      right: -10px;
      bottom: 80px;
      background-color: #1a1a1a;
      border: 1px solid rgba(255, 255, 255, 0.12);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      min-width: 120px;
    }

    .stat-num {
      font-size: 1.5rem;
      font-weight: 900;
      color: #e84c2b;
      line-height: 1;
    }

    .stat-label {
      font-size: 0.72rem;
      color: #888888;
      font-weight: 600;
      margin-top: 0.4rem;
    }

    .fade-bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 80px;
      background: linear-gradient(to bottom, transparent, #1a1a1a);
      pointer-events: none;
    }

    @media (max-width: 960px) {
      .hero-inner {
        grid-template-columns: 1fr;
        padding-top: 3rem;
        padding-bottom: 4rem;
        text-align: left;
      }
      .photo-wrapper {
        height: 440px;
        margin-top: 1rem;
      }
      .profile-img {
        width: 320px;
        height: 420px;
      }
      .stat-card-1 {
        left: 10px;
        bottom: 30px;
      }
      .stat-card-2 {
        right: 10px;
        bottom: 30px;
      }
    }

    @media (max-width: 600px) {
      .contact-divider {
        display: none;
      }
      .contact-bar {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `]
})
export class HeroComponent {
  @Input({ required: true }) profile!: Profile;

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
