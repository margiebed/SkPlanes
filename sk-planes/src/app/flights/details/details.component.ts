import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Flight } from './../../models/flight.models';
import { Component, Input, Inject } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
@Input() flight: Flight;

  constructor(
    private dialogRef: MatDialogRef<DetailsComponent>,
    @Inject (MAT_DIALOG_DATA) private data: Flight
  ) {this.flight = data;
  }

  close(){
    this.dialogRef.close();
  }
}
