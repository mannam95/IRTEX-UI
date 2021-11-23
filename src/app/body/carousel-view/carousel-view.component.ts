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
      id: "1",
      src:'../../../assets/images/slideImages/Airplane/2007_000032.jpg',
      alt:'Aeroplane 1',
      title:'Aeroplane 1'
    },
    {
      id: "2",
      src:'../../../assets/images/slideImages/Airplane/2007_000033.jpg',
      alt:'Aeroplane 2',
      title:'Aeroplane 2'
    },
    {
      id: "3",
      src:'../../../assets/images/slideImages/Airplane/2007_000738.jpg',
      alt:'Aeroplane 3',
      title:'Aeroplane 3'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['Prev', 'Next'],
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
    },
    nav: true
  }

}
