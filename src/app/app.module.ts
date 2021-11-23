import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Material Imports
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageSearchComponent } from './body/image-search/image-search.component';
import { ResultsComponent } from './body/results/results.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselViewComponent } from './body/carousel-view/carousel-view.component';

import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ImageSearchComponent,
    ResultsComponent,
    CarouselViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    NgbModule,
    CarouselModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
