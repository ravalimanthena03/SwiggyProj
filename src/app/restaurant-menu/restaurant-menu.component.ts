import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-restaurant-menu',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './restaurant-menu.component.html',
  styleUrl: './restaurant-menu.component.css'
})
export class RestaurantMenuComponent implements OnInit {
  restaurant: any;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    const restaurantId = +this.route.snapshot.paramMap.get('id')!;
    // Subscribe to the Observable to fetch the restaurant data
    this.restaurantService.getRestaurantById(restaurantId).subscribe(
      (restaurant) => {
        this.restaurant = restaurant;
        console.log('Restaurant data:', this.restaurant); // For debugging
      },
      (error) => {
        console.error('Error fetching restaurant data:', error);
      }
    );
  }
  addToCart(item: any): void {
    this.restaurantService.addToCart(this.restaurant.id, this.restaurant.name, item, item.quantity);
    alert(`${item.name} added to cart!`);
  }

  increaseQuantity(item: any): void {
    item.quantity = (item.quantity || 0) + 1;
    this.addToCart(item);
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 0) {
      item.quantity--;
      this.addToCart(item);
    }
  }
}
