import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { NgFor ,NgIf} from '@angular/common';
@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent implements OnInit {
  favorites: any[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.favorites = this.restaurantService.getFavorites();
  }
}
