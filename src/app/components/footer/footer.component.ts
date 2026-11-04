import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../models/portfolio.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="zoho-footer">
      <div class="zoho-footer-inner">
        <!-- Brand & Overview Column -->
        <div class="footer-col brand-col">
          <div class="brand-row">
            <div class="brand-badge">AG</div>
            <div class="brand-name">{{ profile.name }}</div>
          </div>
          <p class="brand-tagline">
            Computer Science and Engineering graduate specializing in Full Stack Engineering (Java, React, Node, Spring Boot, MySQL). Driven by craftsmanship, robust system design, and clean execution.
          </p>
          <div class="status-indicator">
            <span class="status-dot"></span>
            <span class="status-text">Available for Full-time Roles &amp; Engineering Opportunities</span>
          </div>
        </div>

        <!-- Quick Navigation Column -->
        <div class="footer-col nav-col">
          <h4 class="col-title">Navigation</h4>
          <div class="footer-nav-links">
            <a href="#education" class="footer-nav-link">About &amp; Education</a>
            <a href="#skills" class="footer-nav-link">Technical Skills</a>
            <a href="#experience" class="footer-nav-link">Work Experience</a>
            <a href="#projects" class="footer-nav-link">Key Projects</a>
            <a href="#certificates" class="footer-nav-link">Certifications</a>
            <a href="#hackathons" class="footer-nav-link">Hackathons &amp; Patent</a>
          </div>
        </div>

        <!-- Direct Contact Column -->
        <div class="footer-col contact-col">
          <h4 class="col-title">Contact &amp; Profiles</h4>
          <div class="contact-details">
            <div class="contact-line">📍 {{ profile.location }}</div>
            <a [href]="'tel:' + profile.phone" class="contact-line-link">📞 {{ profile.phone }}</a>
            <a [href]="profile.links.email" class="contact-line-link email-highlight">✉️ {{ profile.email }}</a>
          </div>

          <div class="zoho-footer-links">
            <a [href]="profile.links.github" target="_blank" rel="noreferrer" class="footer-social-btn" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a [href]="profile.links.linkedin" target="_blank" rel="noreferrer" class="footer-social-btn" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z"/>
              </svg>
            </a>
            <a [href]="profile.links.leetcode" target="_blank" rel="noreferrer" class="footer-social-btn" aria-label="LeetCode">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
            </a>
            <a [href]="profile.links.email" class="footer-social-btn" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="zoho-footer-inner copyright-row">
        <p class="zoho-footer-copy">
          © {{ currentYear }} ANTONY GODWIN S · Crafted with engineering precision and clean architecture.
        </p>
      </div>
    </footer>
  `,
  styles: [`
    .zoho-footer {
      background: #111418;
      border-top: 1px solid #23272e;
      color: #ffffff;
      padding: 4.5rem 0 2.5rem;
    }

    .zoho-footer-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 3rem;
      flex-wrap: wrap;
    }

    .brand-col {
      max-width: 380px;
    }

    .brand-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
    }

    .brand-badge {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: linear-gradient(135deg, #e84c2b 0%, #ff6b4a 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: 900;
      font-size: 0.95rem;
    }

    .brand-name {
      font-size: 1.25rem;
      font-weight: 900;
      color: #ffffff;
      letter-spacing: -0.02em;
    }

    .brand-tagline {
      font-size: 0.88rem;
      color: #9ca3af;
      margin-top: 0.5rem;
      line-height: 1.65;
    }

    .status-indicator {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #10b981;
      box-shadow: 0 0 8px #10b981;
    }

    .status-text {
      font-size: 0.78rem;
      color: #9ca3af;
      font-weight: 600;
    }

    .nav-col {
      min-width: 160px;
    }

    .col-title {
      color: #ffffff;
      font-weight: 800;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 1rem;
    }

    .footer-nav-links {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }

    .footer-nav-link {
      color: #9ca3af;
      font-size: 0.84rem;
      text-decoration: none;
      transition: color 140ms ease;
    }

    .footer-nav-link:hover {
      color: #e84c2b;
    }

    .contact-col {
      min-width: 240px;
    }

    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      margin-bottom: 1.5rem;
    }

    .contact-line {
      color: #9ca3af;
      font-size: 0.84rem;
    }

    .contact-line-link {
      color: #9ca3af;
      font-size: 0.84rem;
      text-decoration: none;
      transition: color 140ms ease;
    }

    .contact-line-link:hover {
      color: #ffffff;
    }

    .email-highlight {
      color: #e84c2b;
      font-weight: 600;
    }

    .email-highlight:hover {
      text-decoration: underline;
    }

    .zoho-footer-links {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }

    .footer-social-btn {
      color: #f1f5f9;
      background-color: #23272f;
      border: 1px solid #374151;
      border-radius: 8px;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }

    .footer-social-btn:hover {
      color: #ffffff;
      background-color: #e84c2b;
      border-color: #e84c2b;
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 6px 16px rgba(232, 76, 43, 0.35);
    }

    .copyright-row {
      padding-top: 2rem;
      border-top: 1px solid #2a2a2a;
      margin-top: 2rem;
      justify-content: center;
    }

    .zoho-footer-copy {
      font-size: 0.82rem;
      color: #666666;
      text-align: center;
      width: 100%;
    }

    @media (max-width: 768px) {
      .zoho-footer-inner {
        flex-direction: column;
        text-align: left;
      }
    }
  `]
})
export class FooterComponent {
  @Input({ required: true }) profile!: Profile;

  readonly currentYear = new Date().getFullYear();
}
