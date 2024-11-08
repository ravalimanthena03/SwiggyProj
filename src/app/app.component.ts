import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FoodOptionsComponent } from './food-options/food-options.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { FooterComponent } from './footer/footer.component';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgIf } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FavoriteComponent } from './favorite/favorite.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent, FoodOptionsComponent,FavoriteComponent, RestaurantDetailComponent, FooterComponent, NgIf, HeaderComponent, CartComponent,RestaurantMenuComponent,SignupComponent,SigninComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'SwiggyClone';
  showMainContent: boolean = true;
  showRestaurantMenu: boolean = false;
  showSignIn: boolean = false;
  showSignup: boolean = false; 
  showFavorite=false;
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.url.includes('/restaurant/')) {
        this.showMainContent = false;
        this.showRestaurantMenu = true;
        this.showSignIn = false;
        this.showSignup = false;
        this.showFavorite=false;
      } else if (event.url.includes('/cart')) {
        this.showMainContent = false;
        this.showRestaurantMenu = false;
        this.showSignIn = false;
        this.showSignup = false;
        this.showFavorite=false;
      } else if (event.url.includes('/signin')) {
        this.showMainContent = false;
        this.showRestaurantMenu = false;
        this.showSignIn = true;
        this.showSignup = false;
        this.showFavorite=false;
      } else if (event.url.includes('/signup')) {
        this.showMainContent = false;
        this.showRestaurantMenu = false;
        this.showSignIn = false;
        this.showSignup = true;
        this.showFavorite=false;
      } else if (event.url.includes('/favorite')) {
        this.showMainContent = false;
        this.showRestaurantMenu = false;
        this.showSignIn = false;
        this.showSignup = false;
        this.showFavorite=true;
      }else {
        this.showMainContent = true;
        this.showRestaurantMenu = false;
        this.showSignIn = false;
        this.showSignup = false;
        this.showFavorite=false;
      }
    });
  }

  // Handles page navigation from header component
  handleNavigation(page: string): void {
  if (page === 'signin') {
      this.showSignIn = true;
      this.showSignup = false;
      this.showMainContent = false;
      this.showRestaurantMenu = false;
      this.showFavorite=false;
    }else if (page === 'restaurant') {
      this.showMainContent = false;
      this.showSignIn = false;
      this.showSignup = false;
      this.showRestaurantMenu = true;
      this.showFavorite = false;
    } else if (page === 'signup') {
      this.showSignIn = false;
      this.showSignup = true;
      this.showMainContent = false;
      this.showRestaurantMenu = false;
      this.showFavorite=false;
    } else if (page === 'cart') {
      this.showMainContent = false;
      this.showSignIn = false;
      this.showSignup = false;
      this.showRestaurantMenu = false;
      this.showFavorite=false;
    } else if (page ==='favorite') {
      this.showMainContent = false;
      this.showRestaurantMenu = false;
      this.showSignIn = false;
      this.showSignup = false;
      this.showFavorite=true;
    }else {
      this.showMainContent = true;
      this.showSignIn = false;
      this.showSignup = false;
      this.showRestaurantMenu = false;
      this.showFavorite=false;
    }
  }

  // Function for cart icon click
  displayCartPage() {
    this.showMainContent = false;
    this.showSignIn = false;
    this.showSignup = false;
    this.showRestaurantMenu = false;
  }

  // Function for "Home" button click
  displayHomePage() {
    this.showMainContent = true;
    this.showSignIn = false;
    this.showSignup = false;
    this.showRestaurantMenu = false;
    this.router.navigate(['/']);
  }
}
