import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader-fullscreen" [class.loader-visible]="visible">
      <img
        src="assets/LOADING/Loading.gif"
        alt="Loading..."
        class="loader-gif"
      />
    </div>
  `,
  styles: [`
    .loader-fullscreen {
      position: fixed;
      inset: 0;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: all;
    }

    .loader-fullscreen.loader-visible {
      opacity: 1;
    }

    .loader-gif {
      width: 200px;
      height: 200px;
      object-fit: contain;
    }

    @media (max-width: 600px) {
      .loader-gif {
        width: 150px;
        height: 150px;
      }
    }
  `]
})
export class LoaderComponent implements OnInit {
  visible = false;

  ngOnInit(): void {
    requestAnimationFrame(() => {
      this.visible = true;
    });
  }
}
