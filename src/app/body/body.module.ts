import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material Imports
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { CarouselViewComponent } from './carousel-view/carousel-view.component';
import { ImageSearchComponent } from './image-search/image-search.component';



@NgModule({
  declarations: [
    ImageSearchComponent,
    CarouselViewComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    ImageSearchComponent,
    CarouselViewComponent
  ]
})
export class BodyModule { }
