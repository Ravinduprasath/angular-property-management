import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPropertyComponent } from './list-property/list-property.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailPropertyComponent } from './detail-property/detail-property.component';
import { DialogComponent } from './dialog/dialog.component';

// For angular reactive form
import { ReactiveFormsModule } from '@angular/forms'

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

// Load component inside Product by route
const routes: Routes = [
  { path: "", component: ListPropertyComponent},
  { path: "detail/:propertyId", component: DetailPropertyComponent},
];

@NgModule({
  declarations: [
    ListPropertyComponent,
    DialogComponent,
    DetailPropertyComponent,
  ],
  imports: [
    CommonModule,
    // Route for children component
    RouterModule.forChild(routes),
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatGridListModule
  ]
})
export class PropertyModule { }
