import { Component, Input } from '@angular/core';

import { Product } from '../../../products/model/product.model';
import { CartService } from '../../../cart/service/cart.service';

@Component({
  selector: 'app-product-panel',
  standalone: true,
  templateUrl: './product-panel.html',
  styleUrl: './product-panel.css'
})
export class ProductPanelComponent {

  constructor(private cartService: CartService) {}

  @Input({ required: true })
  product!: Product;

  addToCart(): void {

    this.cartService.add(this.product);

  }

  showDetails = false;

  openDetails(): void {
    this.showDetails = true;
  }

  closeDetails(): void {
    this.showDetails = false;
  }

}