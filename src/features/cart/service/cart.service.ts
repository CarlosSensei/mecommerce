import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from '../model/cart-item.model';
import { Product } from '../../products/model/product.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private items = signal<CartItem[]>([]);

  readonly cartItems = this.items.asReadonly();

  readonly totalItems = computed(() =>
    this.items().reduce((total, item) => total + item.quantity, 0));

  readonly totalPrice = computed(() =>
    this.items().reduce((total, item) => total + item.product.price * item.quantity, 0));

  add(product: Product): void {

    const existing = this.items().find(item => item.product.id === product.id);

    if (existing) {

      existing.quantity++;

      this.items.set([...this.items()]);

      return;
    }

    this.items.update(items => [...items, { product, quantity: 1 }]);

  }

  remove(productId: number): void {

    this.items.update(items => items.filter(item => item.product.id !== productId));

  }

  increase(productId: number): void {

    this.items.update(items =>
      items.map(item => item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 } : item));

  }

  decrease(productId: number): void {

    this.items.update(items => items.map(item =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 } : item)
        .filter(item => item.quantity > 0));

  }

  clear(): void {

    this.items.set([]);

  }

  readonly isOpen = signal(false);

  open(): void {
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }

  toggle(): void {
    this.isOpen.update(value => !value);
  }

}