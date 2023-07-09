import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { patient } from '../models/patient.model';
import { PatientService } from '../service/patient.service';
import { TreatmentService } from '../service/treatment.service';
import { treatment } from '../models/treatment.model';
import { MatListOption } from '@angular/material/list';
import { DoctorService } from '../service/doctor.service';
import { doctor } from '../models/doctor.model';
import { patientDiagnosis } from '../models/patientDiagnosis.model';
import { PatientDiagnosisService } from '../service/patientDiagnosis.service';
import { CoreService } from '../service/core.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-diagnose',
  templateUrl: './diagnose.component.html',
  styleUrls: ['./diagnose.component.css']
})


export class DiagnoseComponent implements OnInit {

  constructor(
    private patientService:PatientService,
    private treatmentService:TreatmentService,
    private doctorService:DoctorService,
    private patientDiagnosisServise:PatientDiagnosisService,
    private _coreService:CoreService) { }

  ngOnInit(): void {
    this.getAllDoctors();
  }

  patient!: patient;
  panelOpenState=false
  patientInput = new FormControl('', [Validators.required]);
  treatments:treatment[]=[];
  doctors:doctor[]=[];
  showPatientDetails=false;
  patientProperty:string=''
  matcher = new MyErrorStateMatcher();
  patientDiagnosis!:patientDiagnosis;
  findPatient(){
    var value=this.patientInput.value;
    this.patientService.getPatientByPhoneOrRegId(value).subscribe({
      next: (res) => {
        this.patient=res
        console.log(this.patient),
        this.setPatientDiagnosis()
      },
      error: console.log,
    });

    this.findTreatments();
  }

    findTreatments(){
      this.treatmentService.getTreatment().subscribe({
        next:(response)=>{
          this.treatments=response
          console.log(this.treatments)
        }
      });
    }

    AddTreamentsToPatient(items:MatListOption[]){
      var t: treatment[]=[];
      items.forEach(item=>{
        t.push(item.value)
      })
      this.patientDiagnosis.treatments=t;
      console.log(this.patientDiagnosis)
      this.patientDiagnosisServise.addPatientDiagnosis(this.patientDiagnosis).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Diagnosis added successfully');
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }

    getAllDoctors(){
      this.doctorService.getDoctor().subscribe({
        next:(response:any)=>{
          this.doctors=response
          console.log(this.doctors)
        }
      })
    }

    setPatientDiagnosis(){
      this.patientDiagnosis=new patientDiagnosis();
      this.patientDiagnosis.patientId=this.patient.id;
    }
    

}
