import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-manifesto-section',
  standalone: true,
  templateUrl: './manifesto-section.html',
  styleUrl: './manifesto-section.css'
})

export class ManifestoSectionComponent implements AfterViewInit {

  ngAfterViewInit(): void {

    const letters = document.querySelectorAll(
      '.manifesto-title span'
    );

    gsap.fromTo(
      letters,
      {
        opacity: 0.25,
        textShadow: 'none'
      },
      {
        opacity: 1,
        textShadow:
          '0 0 8px var(--active-color), 0 0 24px var(--active-color)',
        stagger: 0.12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      }
    );

  }

}