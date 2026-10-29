import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  templateUrl: './cart-icon.html',
  styleUrl: './cart-icon.css'
})
export class CartIconComponent {

  constructor(
    public cartService: CartService
  ) {}

}
