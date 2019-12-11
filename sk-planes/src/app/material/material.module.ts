import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatButtonModule, MatSnackBarModule, MatCheckboxModule, MatSelectModule, MatToolbarModule} from '@angular/material';
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
  imports: [
    CommonModule
  ],
  exports:[...MATERIAL_MODULES]
})
export class MaterialModule { }
