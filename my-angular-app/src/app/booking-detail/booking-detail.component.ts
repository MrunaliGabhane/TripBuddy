import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
   styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
  bookingDetails: any;
  currentStep: number = 0;
  propertyForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.propertyForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      arrivalDate: ['', Validators.required],
      departureDate: [''],
      creditCardNum: ['', Validators.required],
      expirationMonth: ['', Validators.required],
      expirationYear: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getBookingDetails();
  }

  getBookingDetails() {
    const bookingId = this.route.snapshot.paramMap.get('id');
    if (bookingId) {
      this.bookingService.getBookingDetails(bookingId).subscribe(
        (data) => {
          this.bookingDetails = data;
          console.log(this.bookingDetails);
        },
        (error) => {
          console.error('Error fetching booking details:', error);
        }
      );
    } else {
      console.error('Booking ID not found.');
    }
  }

  startBooking() {
    this.currentStep = 1;
  }

  nextStep() {
    this.currentStep++;
  }

  previousStep() {
    this.currentStep--;
  }

  submitBooking() {
    Swal.fire({
      title: 'Submitting...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
        this.submitForm().then(
          () => {
            Swal.fire({
              icon: 'success',
              title: 'Booking Successful',
              text: 'Your booking has been submitted successfully!',
              showConfirmButton: false,
              timer: 2000
            }).then(() => {
              this.router.navigate(['/']);
              this.bookingService.deleteBooking(this.bookingDetails.booking_id).toPromise();
            });
            this.currentStep = 0;
            this.propertyForm.reset();
          },
          (error) => {
            console.error('Error submitting booking:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'An error occurred while submitting the booking. Please try again later.',
              showConfirmButton: false,
              timer: 3000
            });
          }
        ).finally(() => {
          Swal.hideLoading();
        });
      }
    });
  }

  private submitForm(): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, 2000));
  }
}
