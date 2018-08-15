import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';





@NgModule({
  imports: [
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
