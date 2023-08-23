import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

//Material Imports
import {MaterialModule} from '../sharedModule/material.module';

import { VisualDialogComponent } from './visual-dialog/visual-dialog.component';



@NgModule({
  declarations: [
    VisualDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    VisualDialogComponent,
  ]
})
export class ResultsModule { }
