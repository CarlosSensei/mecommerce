import { Component, Input } from '@angular/core';
import { Product } from '../../../features/products/model/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {

  @Input({ required: true })
  product!: Product;

}