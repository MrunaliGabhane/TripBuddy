import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostsComponent } from './hosts/hosts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BookingsComponent } from './bookings/bookings.component';
import { PropertiesComponent } from './properties/properties.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hosts', component: HostsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // Add a default route to redirect to the login page
  { path: '', component: HomeComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
