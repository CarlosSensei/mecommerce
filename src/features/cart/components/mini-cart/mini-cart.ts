import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { HomeScrollService } from '../../../home/service/home-scroll.service';


@Component({
  selector: 'app-mini-cart',
  standalone: true,
  templateUrl: './mini-cart.html',
  styleUrl: './mini-cart.css'
})
export class MiniCartComponent {

  constructor(
    public cartService: CartService,
    private homeScroll: HomeScrollService
  ) {}

  showCheckoutMessage = false;

checkout(): void {

  this.cartService.close();

  this.showCheckoutMessage = true;

}

  goToContact(): void {

    const wrapper = document.querySelector(
      '.scroll-wrapper'
    ) as HTMLDivElement;

    if (!wrapper) {
      return;
    }

    this.showCheckoutMessage = false;

    this.cartService.close();

    this.homeScroll.goToSectionById(
      wrapper,
      'cta'
    );

  }

}