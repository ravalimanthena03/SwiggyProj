import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {  ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-food-options',
  standalone: true,
  imports: [NgFor],
  templateUrl: './food-options.component.html',
  styleUrl: './food-options.component.css'
})
export class FoodOptionsComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  foodItems = [
    { name: 'North Indian', image: 'assets/images/northindian.png' },
  { name: 'Biryani', image: 'assets/images/biriyani.png' },
  { name: 'Pizza', image: 'assets/images/pizza.png' },
  { name: 'Burgers', image: 'assets/images/burger.png' },
  { name: 'Chinese', image: 'assets/images/chinese.png' },
  { name: 'Chole Bhature', image: 'assets/images/cholebature.png' },
  { name: 'paratha', image: 'assets/images/paratha.png' },
  { name: 'South Indian', image: 'assets/images/southindian.png' },
  { name: 'pav Bhaji', image: 'assets/images/pavbhaji.png' },
  { name: 'Salads', image: 'assets/images/salad.png' },
  { name: 'Shake', image: 'assets/images/shake.png' },
  { name: 'Pure Veg', image: 'assets/images/pureveg.png' },
  { name: 'Dosa', image: 'assets/images/dosa.png' },
  ];

  scrollLeft(): void {
    this.carousel.nativeElement.scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    this.carousel.nativeElement.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  }
}
