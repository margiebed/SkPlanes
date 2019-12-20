import { NgModule } from '@angular/core';

import {
  MatCardModule,
   MatFormFieldModule,
   MatInputModule,
   MatDialogModule,
   MatButtonModule,
   MatSnackBarModule,
   MatCheckboxModule,
   MatSelectModule,
   MatToolbarModule,
   MatIconModule} from '@angular/material';

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
  exports: [ ...MATERIAL_MODULES]
})
export class MaterialModule { }
