import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './DentAmour/patient/patient.component';
import { DoctorComponent } from './DentAmour/doctor/doctor.component';
import { DiagnoseComponent } from './DentAmour/diagnose/diagnose.component';
import { TreatmentComponent } from './DentAmour/treatment/treatment.component';

const routes: Routes = [
  { path: 'patient', component: PatientComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'diagnose', component: DiagnoseComponent },
  { path: 'treatment', component:TreatmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
