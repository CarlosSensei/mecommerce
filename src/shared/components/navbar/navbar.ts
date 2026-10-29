import { Component } from '@angular/core';
import { HomeScrollService } from '../../../features/home/service/home-scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {

  constructor(
    private homeScroll: HomeScrollService
  ) {}

  goTo(sectionId: string): void {

    const wrapper = document.querySelector(
      '.scroll-wrapper'
    ) as HTMLDivElement;

    if (!wrapper) {
      return;
    }

    this.homeScroll.goToSectionById(
      wrapper,
      sectionId
    );

  }

}