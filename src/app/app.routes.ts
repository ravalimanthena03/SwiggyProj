import { Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { CartComponent } from './cart/cart.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
export const routes: Routes = [
    {
        path:"hero",
        component:HeroSectionComponent
    },
    { path: 'footer', component: FooterComponent },
    { path: 'restaurant/:id', component: RestaurantMenuComponent },
    { path: 'cart', component: CartComponent },
    { path: 'favorite', component: FavoriteComponent },
    { path: 'signup', component: SignupComponent },
    {path:'signin',component:SigninComponent},
    { path: '**', redirectTo: '' }
];