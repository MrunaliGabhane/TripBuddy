import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarActive: boolean = false;
  isActionsActive: boolean = false;


  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }
  toggleActions() {
    this.isActionsActive = !this.isActionsActive;
  }
}



