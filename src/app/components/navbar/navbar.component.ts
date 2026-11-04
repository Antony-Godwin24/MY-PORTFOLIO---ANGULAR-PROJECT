import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavSection {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="app-bar" [class.app-bar-elevated]="elevated">
      <div class="toolbar">
        <!-- Brand -->
        <a href="#hero" (click)="goTo($event, 'hero')" class="brand">
          <div class="brand-mark">
            <span class="brand-initials">AG</span>
          </div>
          <div>
            <div class="brand-name">Antony Godwin S</div>
            <div class="brand-sub">Software Developer</div>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav">
          @for (s of sections; track s.id) {
            <a
              [href]="'#' + s.id"
              (click)="goTo($event, s.id)"
              class="nav-link"
              [class.active-link]="activeSection === s.id"
            >
              {{ s.label }}
            </a>
          }
        </nav>

        <!-- Actions -->
        <div class="actions">
          <a
            [href]="resumeUrl"
            download="ANTONY_GODWIN_S_RESUME.pdf"
            class="resume-btn"
          >
            Download Resume
          </a>

          <button
            (click)="drawerOpen = true"
            class="menu-btn"
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Drawer Backdrop & Drawer -->
      @if (drawerOpen) {
        <div class="drawer-backdrop" (click)="drawerOpen = false"></div>
        <div class="drawer">
          <div class="drawer-header">
            <span class="drawer-title">Menu</span>
            <button (click)="drawerOpen = false" class="drawer-close" aria-label="Close menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div class="drawer-links">
            @for (s of sections; track s.id) {
              <a
                [href]="'#' + s.id"
                (click)="goTo($event, s.id)"
                class="drawer-link"
                [class.active-drawer-link]="activeSection === s.id"
              >
                {{ s.label }}
              </a>
            }
          </div>

          <a
            [href]="resumeUrl"
            download="ANTONY_GODWIN_S_RESUME.pdf"
            class="drawer-resume-btn"
          >
            Download Resume
          </a>
        </div>
      }
    </header>
  `,
  styles: [`
    .app-bar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid transparent;
      transition: border-color 200ms ease, box-shadow 200ms ease;
      color: #1a1a1a;
      width: 100%;
    }

    .app-bar-elevated {
      border-color: #e8e8e8;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    }

    .toolbar {
      max-width: 1200px;
      margin: 0 auto;
      min-height: 72px;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      flex-shrink: 0;
    }

    .brand-mark {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    }

    .brand-initials {
      color: #ffffff;
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: -0.02em;
    }

    .brand-name {
      color: #1a1a1a;
      font-weight: 800;
      font-size: 0.95rem;
      line-height: 1.15;
      letter-spacing: -0.01em;
    }

    .brand-sub {
      color: #777777;
      font-weight: 500;
      font-size: 0.72rem;
      letter-spacing: 0.02em;
      margin-top: 1px;
    }

    .desktop-nav {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .nav-link {
      padding: 0.55rem 0.9rem;
      color: #555555;
      font-size: 0.9rem;
      font-weight: 500;
      border-radius: 6px;
      text-decoration: none;
      transition: color 150ms ease, background-color 150ms ease;
    }

    .nav-link:hover {
      color: #1a1a1a;
      background-color: #f0f0f0;
    }

    .active-link {
      color: #e84c2b;
      background-color: rgba(232, 76, 43, 0.06);
      font-weight: 700;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .resume-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: #e84c2b;
      color: #ffffff;
      font-size: 0.85rem;
      font-weight: 600;
      border-radius: 6px;
      padding: 0.6rem 1.4rem;
      transition: all 160ms ease;
      box-shadow: none;
      white-space: nowrap;
    }

    .resume-btn:hover {
      background-color: #c73d20;
      box-shadow: 0 4px 12px rgba(232, 76, 43, 0.3);
    }

    .menu-btn {
      display: none;
      color: #1a1a1a;
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      padding: 6px;
      background: transparent;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 900px) {
      .desktop-nav {
        display: none;
      }
      .menu-btn {
        display: inline-flex;
      }
      .resume-btn {
        display: none;
      }
      .toolbar {
        padding: 0 1.25rem;
      }
    }

    /* Mobile Drawer */
    .drawer-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 10001;
    }

    .drawer {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 280px;
      background: #ffffff;
      z-index: 10002;
      box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      animation: drawerSlide 0.25s ease-out;
    }

    @keyframes drawerSlide {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }

    .drawer-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .drawer-title {
      font-weight: 800;
      font-size: 1.1rem;
      color: #1a1a1a;
    }

    .drawer-close {
      padding: 4px;
      color: #666;
      border-radius: 6px;
    }

    .drawer-close:hover {
      background: #f0f0f0;
      color: #1a1a1a;
    }

    .drawer-links {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .drawer-link {
      padding: 0.75rem 1rem;
      color: #555555;
      font-size: 0.95rem;
      font-weight: 500;
      border-radius: 6px;
      text-decoration: none;
      transition: background-color 150ms ease;
    }

    .drawer-link:hover {
      background: #f5f5f5;
      color: #1a1a1a;
    }

    .active-drawer-link {
      color: #e84c2b;
      background-color: rgba(232, 76, 43, 0.08);
      font-weight: 700;
    }

    .drawer-resume-btn {
      margin-top: 1.5rem;
      display: block;
      text-align: center;
      background-color: #e84c2b;
      color: #ffffff;
      padding: 0.75rem;
      font-weight: 700;
      font-size: 0.9rem;
      border-radius: 8px;
    }

    .drawer-resume-btn:hover {
      background-color: #c73d20;
    }
  `]
})
export class NavbarComponent implements OnInit {
  @Input() resumeUrl = 'assets/Resume/ANTONY_GODWIN_S_RESUME.pdf';

  elevated = false;
  drawerOpen = false;
  activeSection = 'hero';

  sections: NavSection[] = [
    { id: 'hero', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
  ];

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.elevated = window.scrollY > 20;
    this.updateActiveSection();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateActiveSection();
  }

  updateActiveSection(): void {
    const pos = window.scrollY + 120;
    let current = this.sections[0].id;
    for (const s of this.sections) {
      const el = document.getElementById(s.id);
      if (el && pos >= el.offsetTop) {
        current = s.id;
      }
    }
    this.activeSection = current;
  }

  goTo(event: Event, id: string): void {
    event.preventDefault();
    this.activeSection = id;
    window.history.replaceState(null, '', `#${id}`);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.drawerOpen = false;
  }
}
