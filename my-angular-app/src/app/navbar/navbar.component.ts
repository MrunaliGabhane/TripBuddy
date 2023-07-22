import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarActive: boolean = false;

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }
}



// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {
//   isNavbarActive: boolean = false;
//   showUserOptions: boolean = false;
//   showAdminOptions: boolean = false;

//   constructor(private router: Router) {}

//   toggleNavbar() {
//     this.isNavbarActive = !this.isNavbarActive;
//   }

//   toggleUserOptions() {
//     this.showUserOptions = !this.showUserOptions;
//     this.showAdminOptions = false;
//   }

//   toggleAdminOptions() {
//     this.showAdminOptions = !this.showAdminOptions;
//     this.showUserOptions = false;
//   }

//   showAdminRegister() {
//     // Implement navigation logic to admin registration page
//     this.router.navigate(['/admin-register']);
//   }

//   showAdminLogin() {
//     // Implement navigation logic to admin login page
//     this.router.navigate(['/admin-login']);
//   }
// }
