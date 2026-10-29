import { Component, Input } from '@angular/core';

import { Product } from '../../../products/model/product.model';

@Component({
  selector: 'app-product-panel',
  standalone: true,
  templateUrl: './product-panel.html',
  styleUrl: './product-panel.css'
})
export class ProductPanelComponent {

  @Input({ required: true })
  product!: Product;

}