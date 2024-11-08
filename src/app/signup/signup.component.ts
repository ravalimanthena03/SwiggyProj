import { Component } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HttpClientModule,NgIf,FormsModule,CommonModule,RouterOutlet],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  successMessage: string | null = null;
  errorMessage: string | null = null;
  router: any;

  constructor(private http: HttpClient) {}
  // Navigate to the signin page
  navigateToSignIn() {
    this.router.navigate(['/signin']);
  }
  onSubmit() {
    const postData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    // Send a POST request to the mock API to create a user
    this.http
      .post('https://672c90231600dda5a9f8f368.mockapi.io/users', postData)
      .pipe(
        catchError((error) => {
          this.errorMessage = 'An error occurred. Please try again.';
          return throwError(error);
        })
      )
      .subscribe(
        (response) => {
          this.successMessage = 'You have successfully signed up!';
          this.resetForm();
        },
        (error) => {
          this.errorMessage = 'An error occurred. Please try again.';
        }
      );
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.errorMessage = null;
  }
}
