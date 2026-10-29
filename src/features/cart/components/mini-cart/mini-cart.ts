import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-mini-cart',
  standalone: true,
  templateUrl: './mini-cart.html',
  styleUrl: './mini-cart.css'
})
export class MiniCartComponent {

  constructor(
    public cartService: CartService
  ) {}

}