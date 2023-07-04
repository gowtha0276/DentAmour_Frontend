import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorService } from '../../service/doctor.service';
import { CoreService } from '../../service/core.service';
@Component({
  selector: 'app-doctorcrud',
  templateUrl: './doctorcrud.component.html',
  styleUrls: ['./doctorcrud.component.css']
})
export class DoctorcrudComponent implements OnInit {

  docForm: FormGroup;
 
  designation: string[] = [
    'Duty Doctor',
    'Consultant'
  ];
  constructor(
    private _fb: FormBuilder,
    private doctorService: DoctorService,
    private _dialogRef: MatDialogRef<DoctorcrudComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.docForm = this._fb.group({
      name: '',
      registrationID:'',
      mail: '',
      designation: '',
      phone:''
    });
  }

  ngOnInit(): void {
    this.docForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.docForm.valid) {
      if (this.data) {
        console.log(this.data);
        console.log(this.docForm.value);
        this.doctorService
          .updateDoctor(this.data.id, this.docForm.value)
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
        this.doctorService.addDoctor(this.docForm.value).subscribe({
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
