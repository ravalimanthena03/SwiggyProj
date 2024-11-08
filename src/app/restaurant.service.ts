import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private  restaurants = [
    {
      id: 1,
      name: 'Ce La Vie Kitchen & Bar',
      cuisine: 'Asian • Continental',
      price: '₹2300 for two',
      location: 'Connaught Place, Delhi',
      distance: '4.5 km',
      rating: 4.2,
      offers: [
        { type: 'pre-booking', discount: '35%' },
        { type: 'bank offers', discount: '15%' }
      ],
      image: 'assets/images/ce-la-vie.png',
      menu: [
        {
          id: 1,
          name: 'Pasta',
          details: 'Creamy Alfredo Pasta',
          price: 15,
          image: 'assets/images/noodles.png' ,// Add image for each dish,
          quantity: 0
        },
        {
          id: 2,
          name: 'Pizza',
          details: 'Margherita Pizza',
          price: 12,
          image: 'assets/images/pizza.png',
          quantity: 0
        },
      ]
    },
    {
      id: 2,
      name: 'The Embassy',
      cuisine: 'European • North Indian',
      price: '₹1800 for two',
      location: 'Connaught Place, Delhi',
      distance: '3.8 km',
      rating: 4.1,
      offers: [
        { type: 'walk-in', discount: '15%' },
        { type: 'bank offers', discount: '10%' }
      ],
      image: 'assets/images/the-embassy.png',
      menu: [
        {
          id: 1,
          name: 'Pasta',
          details: 'Creamy Alfredo Pasta',
          price: 15,
          image: 'assets/images/noodles.png' ,// Add image for each dish,
          quantity: 0
        },
        {
          id: 2,
          name: 'Pizza',
          details: 'Margherita Pizza',
          price: 12,
          image: 'assets/images/pizza.png',
          quantity: 0
        },
      ]
    },
    {
      id: 3,
      name: 'My Bar Square',
      cuisine: 'Finger Food • North Indian',
      price: '₹2000 for two',
      location: 'Connaught Place, Delhi',
      distance: '4.2 km',
      rating: 4.0,
      offers: [
        { type: 'pre-booking', discount: '15%' },
        { type: 'bank offers', discount: '15%' }
      ],
      image: 'assets/images/my-bar-square.png',
      menu: [
        {
          id: 1,
          name: 'Pasta',
          details: 'Creamy Alfredo Pasta',
          price: 15,
          image: 'assets/images/noodles.png' ,// Add image for each dish,
          quantity: 0
        },
        {
          id: 2,
          name: 'Pizza',
          details: 'Margherita Pizza',
          price: 12,
          image: 'assets/images/pizza.png',
          quantity: 0
        },
      ]
    },
    {
      id: 4,
      name: 'DR Zombie',
      cuisine: 'Italian • North Indian',
      price: '₹2400 for two',
      location: 'Connaught Place, Delhi',
      distance: '4 km',
      rating: 4.5,
      offers: [
        { type: 'walk-in', discount: '25%' },
        { type: 'bank offers', discount: '15%' }
      ],
      image: 'assets/images/dr-zombie.png',
      menu: [
        {
          id: 1,
          name: 'Pasta',
          details: 'Creamy Alfredo Pasta',
          price: 15,
          image: 'assets/images/noodles.png' ,// Add image for each dish,
          quantity: 0
        },
        {
          id: 2,
          name: 'Pizza',
          details: 'Margherita Pizza',
          price: 12,
          image: 'assets/images/pizza.png',
          quantity: 0
        },
      ]
    },
    {
      id: 5,
      name: 'Warehouse Cafe',
      cuisine: 'Cafe • Continental',
      price: '₹2200 for two',
      location: 'Connaught Place, Delhi',
      distance: '3.9 km',
      rating: 4.3,
      offers: [
        { type: 'pre-booking', discount: '20%' },
        { type: 'bank offers', discount: '10%' }
      ],
      image: 'assets/images/warehouse-cafe.png',
      menu: [
        {
          id: 1,
          name: 'Pasta',
          details: 'Creamy Alfredo Pasta',
          price: 15,
          image: 'assets/images/noodles.png' ,// Add image for each dish,
          quantity: 0
        },
        {
          id: 2,
          name: 'Pizza',
          details: 'Margherita Pizza',
          price: 12,
          image: 'assets/images/pizza.png',
          quantity: 0
        },
      ]
    },
    {
      id: 6,
      name: 'Lord of the Drinks',
      cuisine: 'Italian • Continental',
      price: '₹2600 for two',
      location: 'Connaught Place, Delhi',
      distance: '4.8 km',
      rating: 4.6,
      offers: [
        { type: 'walk-in', discount: '30%' },
        { type: 'bank offers', discount: '20%' }
      ],
      image: 'assets/images/lord-of-the-drinks.png',
      menu: [
        {
          id: 1,
          name: 'Pasta',
          details: 'Creamy Alfredo Pasta',
          price: 15,
          image: 'assets/images/noodles.png' ,// Add image for each dish,
          quantity: 0
        },
        {
          id: 2,
          name: 'Pizza',
          details: 'Margherita Pizza',
          price: 12,
          image: 'assets/images/pizza.png',
          quantity: 0
        },
      ]
    },
    {
      id: 7,
      name: 'Farzi Cafe',
      cuisine: 'Modern Indian',
      price: '₹3000 for two',
      location: 'Connaught Place, Delhi',
      distance: '4.1 km',
      rating: 4.4,
      offers: [
        { type: 'pre-booking', discount: '25%' },
        { type: 'bank offers', discount: '10%' }
      ],
      image: 'assets/images/farzi-cafe.png',
      menu: [
        {
          id: 1,
          name: 'Pasta',
          details: 'Creamy Alfredo Pasta',
          price: 15,
          image: 'assets/images/noodles.png' ,// Add image for each dish,
          quantity: 0
        },
        {
          id: 2,
          name: 'Pizza',
          details: 'Margherita Pizza',
          price: 12,
          image: 'assets/images/pizza.png',
          quantity: 0
        },
      ]
    },
  ];
  // private cart: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>(this.getCartFromLocalStorage());
  cart$ = this.cartSubject.asObservable();

  constructor() { }
  getRestaurants() {
    return this.restaurants;
  }

  // Method to retrieve a restaurant by ID
  // Fetch restaurant by ID
  getRestaurantById(id: number): Observable<any> {
    const restaurant = this.restaurants.find((res) => res.id === id);
    return of(restaurant); // Convert to Observable
  }
  private getCartFromLocalStorage(): any[] {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
  }

  private saveCartToLocalStorage(cart: any[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cartSubject.next(cart);  // Notify all subscribers
  }

  addToCart(restaurantId: number, restaurantName: string, item: any, quantity: number): void {
    let cart = this.getCartFromLocalStorage();

    if (quantity === 0) {
      cart = cart.filter(cartItem => cartItem.id !== item.id);
    } else {
      const existingItem = cart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity = quantity;
      } else {
        cart.push({
          ...item,
          restaurantId,
          restaurantName,
          quantity
        });
      }
    }
    this.saveCartToLocalStorage(cart);
  }

  getCart(): Observable<any[]> {
    return this.cart$;
  }

  clearCart(): void {
    localStorage.removeItem('cart');
    this.cartSubject.next([]);
  }
  //favouritesss
  private favorites: any[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  toggleFavorite(restaurant: any): void {
    const index = this.favorites.findIndex(fav => fav.id === restaurant.id);
    if (index > -1) {
      // If it exists, remove from favorites
      this.favorites.splice(index, 1);
    } else {
      // Add to favorites
      this.favorites.push(restaurant);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  isFavorite(restaurant: any): boolean {
    return this.favorites.some(fav => fav.id === restaurant.id);
  }

  getFavorites(): any[] {
    return this.favorites;
  }
}
