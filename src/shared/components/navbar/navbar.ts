import { Component } from '@angular/core';
import { HomeScrollService } from '../../../features/home/service/home-scroll.service';
import { CartService } from '../../../features/cart/service/cart.service';
import { CartIconComponent } from '../../../features/cart/components/cart-icon/cart-icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CartIconComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {

  constructor(
    private homeScroll: HomeScrollService,
    public cartService: CartService
  ) {}

  goTo(sectionId: string): void {

    const wrapper = document.querySelector('.scroll-wrapper') as HTMLDivElement;

    if (!wrapper) {
      return;
    }

    this.homeScroll.goToSectionById(wrapper, sectionId);

  }

}