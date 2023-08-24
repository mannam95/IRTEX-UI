import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IServerResults, ServerResults, Similarityarr, TopScore } from '../interface/query_results_interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-visual-dialog',
  templateUrl: './visual-dialog.component.html',
  styleUrls: ['./visual-dialog.component.css']
})
export class VisualDialogComponent implements OnInit {

  currentRow: Similarityarr;

  constructor(public dialogRef: MatDialogRef<VisualDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Similarityarr, private sanitizer: DomSanitizer) {
    this.currentRow = data
    console.log('Incoming details:', this.currentRow)
  }

  ngOnInit(): void {
  }

  prepareVisualExplanationText(): string {
    let firstDiv = "<div>" + this.getTotalObjectsCountString() + this.getSimilarObjectsCountString() + "</div>";
    return firstDiv;
  }

  getTotalObjectsCountString(): string {
    let totalObjectsCount = this.currentRow.sim_per_facet.reduce((acc, cur) => acc + cur.similarity_of_obj_type.length, 0);

    // Now formulate the div with h1
    if (totalObjectsCount == 1) {
      return "In total there is " + totalObjectsCount.toString() + " similar object between the images.";
    } else {
      return "In total there are " + totalObjectsCount.toString() + " similar objects between the images.";
    }
  }

  // a method to get a string similar to below
  // One Aeroplane, and Two persons have been detected in both the images.
  getSimilarObjectsCountString(): string {
    let objectsJson: any = {};

    // loop over the similarity per facet
    // and get the objects and their counts not as numbers, but numbers with full english words
    this.currentRow.sim_per_facet.forEach((similarityPerFacet) => {
      if (similarityPerFacet.similarity_of_obj_type.length > 0) {
        let objectName = similarityPerFacet.similarity_of_obj_type.length > 1 ? similarityPerFacet.similarity_of_obj_type[0].cat + 's' : similarityPerFacet.similarity_of_obj_type[0].cat;
        let numberWord = this.numberToWord(similarityPerFacet.similarity_of_obj_type.length);
        objectsJson[objectName] = numberWord;
      }
    });

    // Now formulate the h1.
    let h1String = "";
    let h1StringEnd = " have been detected in both the images.";

    // Now loop over the objectsJson and add the strings to the h1String
    for (let key in objectsJson) {

      // If the key is the last key, then add the and
      // If only one objecth is there, then and should not be added
      if (Object.keys(objectsJson).length == 1) {
        h1String = h1String + objectsJson[key] + " " + key + h1StringEnd;
        break;
      } else if (key == Object.keys(objectsJson)[Object.keys(objectsJson).length - 1]) {
        h1String = h1String + "and " + objectsJson[key] + " " + key + h1StringEnd;
      } else {
        h1String = h1String + objectsJson[key] + " " + key + ", ";
      }
    }

    return h1String;
  }

  numberToWord(number: number): string {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    if (number >= 0 && number <= 9) {
      return words[number];
    } else {
      return 'NA';
    }
  }

  numberToWord2(number: number): string {
    const words = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Nineth', 'Tenth'];

    if (number >= 0 && number <= 9) {
      return words[number];
    } else {
      return 'NA';
    }
  }

  // a method to get further individual explanations at object level.
  getIndividualObjectExplanations(): SafeHtml {
    let ulStartString = "<ul>";
    let ulEndString = "</ul>";
    let liStartString = "<li>";
    let liEndString = "</li>";

    let loopString = ulStartString;

    // loop over the similarity per facet
    for(let similarityPerFacet of this.currentRow.sim_per_facet) {
      loopString += liStartString
      loopString += "Among the " + similarityPerFacet.similarity_of_obj_type[0].cat + "s" + " there is " + (similarityPerFacet.sim_for_color *100).toFixed(2) + "% similarity in color, " + (similarityPerFacet.sim_for_shape *100).toFixed(2) + "% similairy in shape.";

      let innerUlString = ulStartString;
      // loop over each object in the similarity of object type, loop with index
      for (let i = 0; i < similarityPerFacet.similarity_of_obj_type.length; i++) {
        const similarityOfObjectType = similarityPerFacet.similarity_of_obj_type[i];
        innerUlString += liStartString;

        if(similarityPerFacet.similarity_of_obj_type.length === 1) {
          innerUlString += "The " + similarityOfObjectType.cat + " is been highlighted by " + similarityOfObjectType.color_name + " box in both the images and has " + (similarityOfObjectType.color_distance *100).toFixed(2) + "% similarity in color, " + (similarityOfObjectType.size_distance *100).toFixed(2) + "% similarity in shape.";
        } else {
          innerUlString += "The " + this.numberToWord2(i) + " " + similarityOfObjectType.cat + " is been highlighted by " + similarityOfObjectType.color_name + " box in both the images and has " + (similarityOfObjectType.color_distance *100).toFixed(2) + "% similarity in color, " + (similarityOfObjectType.size_distance *100).toFixed(2) + "% similarity in shape.";
        }

        innerUlString += liEndString;
      }

      innerUlString += ulEndString;

      loopString += innerUlString + liEndString;
    }

    loopString += ulEndString;

    return this.sanitizer.bypassSecurityTrustHtml(loopString);
  }

  getImageUrl(filename: string): string {
    // Return the URL or path to the image based on the filename
    return '/assets/images/explainimages/' + filename;
  }

}
