import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-view',
  templateUrl: './carousel-view.component.html',
  styleUrls: ['./carousel-view.component.css']
})
export class CarouselViewComponent implements OnInit {

  dynamicSlides = [
    {
      imagesHeader: 'Aeroplane',
      imagesConfig:
        [
          {
            id: "1",
            src: '../../../assets/images/slideImages/Airplane/2007_000032.jpg',
            alt: 'Aeroplane 1',
            title: 'Aeroplane 1',
            name: '2007_000032.jpg'
          },
          {
            id: "2",
            src: '../../../assets/images/slideImages/Airplane/2007_000033.jpg',
            alt: 'Aeroplane 2',
            title: 'Aeroplane 2',
            name: '2007_000033.jpg'
          },
          {
            id: "3",
            src: '../../../assets/images/slideImages/Airplane/2007_000738.jpg',
            alt: 'Aeroplane 3',
            title: 'Aeroplane 3',
            name: '2007_000738.jpg'
          }
        ]
    },
    {
      imagesHeader: 'Bus',
      imagesConfig:
        [
          {
            id: "1",
            src: '../../../assets/images/slideImages/Bus/2007_000648.jpg',
            alt: 'Bus 1',
            title: 'Bus 1',
            name: '2007_000648.jpg'
          },
          {
            id: "2",
            src: '../../../assets/images/slideImages/Bus/2007_000663.jpg',
            alt: 'Bus 2',
            title: 'Bus 2',
            name: '2007_000663.jpg'
          },
          {
            id: "3",
            src: '../../../assets/images/slideImages/Bus/2007_000768.jpg',
            alt: 'Bus 3',
            title: 'Bus 3',
            name: '2007_000768.jpg'
          }
        ]
    },
    {
      imagesHeader: 'Monitor',
      imagesConfig:
        [
          {
            id: "1",
            src: '../../../assets/images/slideImages/Monitor/2007_000039.jpg',
            alt: 'Monitor 1',
            title: 'Monitor 1',
            name: '2007_000039.jpg'
          },
          {
            id: "2",
            src: '../../../assets/images/slideImages/Monitor/2007_000121.jpg',
            alt: 'Monitor 2',
            title: 'Monitor 2',
            name: '2007_000121.jpg'
          },
          {
            id: "3",
            src: '../../../assets/images/slideImages/Monitor/2007_000187.jpg',
            alt: 'Monitor 3',
            title: 'Monitor 3',
            name: '2007_000187.jpg'
          }
        ]
    },
    {
      imagesHeader: 'Person',
      imagesConfig:
        [
          {
            id: "1",
            src: '../../../assets/images/slideImages/Person/2007_000027.jpg',
            alt: 'Person 1',
            title: 'Person 1',
            name: '2007_000027.jpg'
          },
          {
            id: "2",
            src: '../../../assets/images/slideImages/Person/2007_000170.jpg',
            alt: 'Person 2',
            title: 'Person 2',
            name: '2007_000170.jpg'
          },
          {
            id: "3",
            src: '../../../assets/images/slideImages/Person/2007_000323.jpg',
            alt: 'Person 3',
            title: 'Person 3',
            name: '2007_000323.jpg'
          }
        ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 15,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  }

}
