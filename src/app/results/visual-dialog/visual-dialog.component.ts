import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IServerResults, ServerResults, Similarityarr, TopScore } from '../interface/query_results_interface';

@Component({
  selector: 'app-visual-dialog',
  templateUrl: './visual-dialog.component.html',
  styleUrls: ['./visual-dialog.component.css']
})
export class VisualDialogComponent implements OnInit {

  currentRow: Similarityarr;

  constructor(public dialogRef: MatDialogRef<VisualDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Similarityarr) {
      this.currentRow = data
      console.log('Incoming details:', this.currentRow)
     }

  ngOnInit(): void {
  }

  getImageUrl(filename: string): string {
    // Return the URL or path to the image based on the filename
    return '/assets/images/explainimages/' + filename;
  }

}
