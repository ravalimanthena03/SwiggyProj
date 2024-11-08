import { Component,OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { NgIf ,NgFor} from '@angular/common';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService.getCart().subscribe(cart => {
      this.cartItems = cart;
      this.calculateTotal();
    });
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  removeItem(item: any): void {
    this.restaurantService.addToCart(item.restaurantId, item.restaurantName, item, 0);
    this.calculateTotal();
  }

  placeOrder(): void {
    alert('Order placed successfully!');
    this.restaurantService.clearCart();
    this.cartItems = [];
    this.total = 0;
  }
}

