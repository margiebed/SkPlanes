import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
  MatCardModule,
   MatFormFieldModule,
   MatInputModule, 
   MatDialogModule, 
   MatButtonModule, 
   MatSnackBarModule, 
   MatCheckboxModule, 
   MatSelectModule, 
   MatToolbarModule} from '@angular/material';
   import {MatIconModule} from '@angular/material/icon';

const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule
];


@NgModule({
  declarations: [],
  exports:[...MATERIAL_MODULES]
})
export class MaterialModule { }
