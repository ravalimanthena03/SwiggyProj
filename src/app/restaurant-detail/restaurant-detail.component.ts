import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import {  ElementRef, ViewChild } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-restaurant-detail',
  standalone: true,
  imports: [NgIf,NgFor,RouterLink,NgClass],
  templateUrl: './restaurant-detail.component.html',
  styleUrl: './restaurant-detail.component.css'
})
export class RestaurantDetailComponent implements OnInit {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  restaurants: any[] = [];

  constructor(private restaurantService: RestaurantService,private router:Router) {}

  ngOnInit(): void {
    // Fetch the list of restaurants from the service
    this.restaurants = this.restaurantService.getRestaurants();
  }
  navigateToRestaurant(restaurantId: string): void {
    this.router.navigateByUrl(`/restaurant/${restaurantId}`);
  }
  scrollLeft(): void {
    this.carousel.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    this.carousel.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }
  toggleFavorite(restaurant: any): void {
    this.restaurantService.toggleFavorite(restaurant);
  }

  isFavorite(restaurant: any): boolean {
    return this.restaurantService.isFavorite(restaurant);
  }
}
