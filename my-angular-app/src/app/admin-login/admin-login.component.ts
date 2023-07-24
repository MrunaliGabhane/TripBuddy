import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email: string="";
  password: string="";
  isLoading: boolean = false;

  constructor(private router: Router) {} // Inject the Router in the constructor

  onLogin() {
    this.isLoading = true;
    // Simulate server-side validation and authentication
    setTimeout(() => {
      if (this.email === 'admin@gmail.com' && this.password === 'admin') {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Welcome, Admin!',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/hosts']); // Redirect to the desired route
          }
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password. Please try again.',
        });
      }
      this.isLoading = false;
    }, 2000); // Simulating server response delay (2 seconds)
  }
}