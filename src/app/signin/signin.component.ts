import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;
  @Output() navigateto = new EventEmitter<string>();
  constructor(private http: HttpClient, private router: Router) {}

  // Navigate to the signup page
  navigateToSignup() {
    this.navigateto.emit('home');
  }
  onSubmit() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.get<any[]>('https://672c90231600dda5a9f8f368.mockapi.io/users')
      .subscribe(
        (users) => {
          const user = users.find(
            u => u.email === loginData.email && u.password === loginData.password
          );
          if (user) {
            // Redirect to homepage or dashboard after successful login
            this.router.navigate(['']);
            alert("Succesful login!")
          } else {
            // Display error if credentials are incorrect
            this.errorMessage = 'Invalid email or password';
            alert("'Invalid email or password'");
          }
        },
        (error) => {
          console.error('Error during sign-in:', error);
          this.errorMessage = 'An error occurred. Please try again.';
          alert("An error occurred. Please try again.")
        }
      );
  }
}
