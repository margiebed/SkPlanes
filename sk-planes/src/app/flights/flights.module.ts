import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { MaterialModule } from '../material/material.module';
import { NewFlightComponent } from './new-flight/new-flight.component';



@NgModule({
  declarations: [FlightsComponent, FlightCardComponent, NewFlightComponent],
  imports: [
    CommonModule, MaterialModule],
    entryComponents:[NewFlightComponent],
  exports: [FlightsComponent]
})
export class FlightsModule { }
