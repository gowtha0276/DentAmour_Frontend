import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiagnoseComponent } from './DentAmour/diagnose/diagnose.component';
import { PatientComponent } from './DentAmour/patient/patient.component';
import { HeaderComponent } from './DentAmour/header/header.component';
import { FooterComponent } from './DentAmour/footer/footer.component';
import { DoctorComponent } from './DentAmour/doctor/doctor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PatientcrudComponent } from './DentAmour/patient/patientcrud/patientcrud.component';
import { DoctorcrudComponent } from './DentAmour/doctor/doctorcrud/doctorcrud.component';
import { TreatmentComponent } from './DentAmour/treatment/treatment.component';
import { TreatmentcrudComponent } from './DentAmour/treatment/treatmentcrud/treatmentcrud.component';

@NgModule({
  declarations: [
    AppComponent,
    DiagnoseComponent,
    PatientComponent,
    HeaderComponent,
    FooterComponent,
    DoctorComponent,
    PatientcrudComponent,
    DoctorcrudComponent,
    TreatmentComponent,
    TreatmentcrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatSortModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    FormsModule
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
