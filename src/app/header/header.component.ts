import { Component , EventEmitter, Output} from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isUserSignedIn = false; // This would be set based on authentication status
  @Output() navigateToPage = new EventEmitter<string>();
  router: any;

  displayHomePage(): void {
    this.navigateToPage.emit('home');
  }

  displayCorporatePage(): void {
    this.navigateToPage.emit('corporate');
  }

  displayFavoritePage(): void {
    this.navigateToPage.emit('favorite');
  }

  displayCartPage(): void {
    this.navigateToPage.emit('cart');
  }
  displaySignInPage():void{
    this.navigateToPage.emit('signin');
  }
  displaySignupPage():void{
    this.navigateToPage.emit('signup');
  }

  logout(): void {
    this.isUserSignedIn = false;
    this.router.navigate(['']);
}
}
