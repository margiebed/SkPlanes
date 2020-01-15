import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FlightFormComponent } from '../flight-form/flight-form.component';
import { FlightsService } from 'src/app/core/services/flights.service';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.scss']
})
export class NewFlightComponent  {
  @ViewChild('flightForm', {static: false}) flightForm: FlightFormComponent;

  constructor(
    private flightsService: FlightsService,
    private toast: MatSnackBar,
    private dialogRef: MatDialogRef<NewFlightComponent>) { }

}
