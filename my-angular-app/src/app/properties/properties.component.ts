
import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import the Router service
import Swal from 'sweetalert2'; // Import SweetAlert

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  perPage: number = 8;
  titleFilter: string = '';
  propertyTypeFilter: string = '';
  locationFilter: string = '';
  isLoading: boolean = true; // Add isLoading property and set it to true initially

  // constructor(private propertyService: PropertyService) { }
  constructor(
    private propertyService: PropertyService,
    private http: HttpClient,
    private router: Router // Inject the Router service
  ) { }

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(): void {
    this.propertyService.getAllProperties(this.currentPage, this.perPage, this.titleFilter, this.propertyTypeFilter, this.locationFilter)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.properties = response;
          this.totalPages = response.length;
          this.isLoading = false; // Set isLoading to false once data is fetched
        },
        (error: any) => {
          console.error('Error fetching properties:', error);
          this.isLoading = false; // Set isLoading to false if an error occurs while fetching data
        }
      );
  }

  applyFilters(): void {
    this.currentPage = 1;
    this.getProperties();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getProperties();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getProperties();
    }
  }

  bookProperty(property: any): void {
    this.http.post<any>('https://tripbuddy-r74j.onrender.com/api/properties/book', property).subscribe(
      (response: any) => {
        console.log('Booking successful:', response);

        // Show SweetAlert for successful booking
        Swal.fire('Added to Bookings', 'Your property has been added to bookings list successfully!', 'success').then(() => {
          // Navigate to the booking page on successful booking
          this.router.navigate(['/bookings']); // Change '/booking' to the actual route for the booking page
        });
      },
      (error: any) => {
        console.error('Error booking property:', error);

        // Show SweetAlert for booking failure
        Swal.fire('Booking Error', 'An error occurred while booking the property.', 'error');
      }
    );
  }
}