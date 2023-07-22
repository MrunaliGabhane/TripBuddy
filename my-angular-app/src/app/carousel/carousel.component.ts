import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carouselConfig: any;
  carouselItems: any[] = [
    {
      imageUrl: 'path/to/your/image1.jpg',
      caption: 'Image 1'
    },
    {
      imageUrl: 'path/to/your/image2.jpg',
      caption: 'Image 2'
    },
    // Add more items as needed
  ];

  ngOnInit() {
    this.carouselConfig = {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      vertical: false, // Make sure this is set to false for horizontal sliding
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
  }
}
