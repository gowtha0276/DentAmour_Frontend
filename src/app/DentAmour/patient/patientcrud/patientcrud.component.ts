import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientService } from '../../service/patient.service';
import { CoreService } from '../../service/core.service';

@Component({
  selector: 'app-patientcrud',
  templateUrl: './patientcrud.component.html',
  styleUrls: ['./patientcrud.component.css']
})
export class PatientcrudComponent implements OnInit {

  patForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private patientService: PatientService,
    private _dialogRef: MatDialogRef<PatientcrudComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.patForm = this._fb.group({
      registrationID: '',
      name: '',
      mail: '',
      dateOfBirth: '',
      occupation: '',
      address: '',
      phone:''
    });
  }

  ngOnInit(): void {
    this.patForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.patForm.valid) {
      if (this.data) {
        console.log(this.data);
        console.log(this.patForm.value);
        this.patientService
          .updatePatient(this.data.id, this.patForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Employee detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.patientService.addPatient(this.patForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
