import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HomeSectionService {

  activeSection = 0;

  updateActivePanel(wrapper: HTMLDivElement): void {

    const panels = Array.from(
      wrapper.querySelectorAll('.panel')
    ) as HTMLElement[];

    const currentSection = Math.round(
      wrapper.scrollLeft / window.innerWidth
    );

    panels.forEach((panel, index) => {

      panel.classList.toggle('active', index === currentSection);

    });

    this.activeSection = currentSection;

    const glow =
      panels[currentSection]?.style.getPropertyValue('--glow');

    if (glow) {

      document.documentElement.style.setProperty(
        '--active-color', glow);

    }

  }

}