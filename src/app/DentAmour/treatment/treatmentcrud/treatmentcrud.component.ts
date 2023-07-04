import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TreatmentService } from '../../service/treatment.service';
import { CoreService } from '../../service/core.service';
@Component({
  selector: 'app-treatmentcrud',
  templateUrl: './treatmentcrud.component.html',
  styleUrls: ['./treatmentcrud.component.css']
})
export class TreatmentcrudComponent implements OnInit {

  treatmentForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private treatmentService: TreatmentService,
    private _dialogRef: MatDialogRef<TreatmentcrudComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.treatmentForm = this._fb.group({
      name: '',
      textInput: '',
      stepTreatment: '',
      multipleStep: ''
    });
  }

  ngOnInit(): void {
    this.treatmentForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.treatmentForm.valid) {
      if (this.data) {
        console.log(this.data);
        console.log(this.treatmentForm.value);
        this.treatmentService
          .updateTreatment(this.data.id, this.treatmentForm.value)
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
        this.treatmentService.addTreatment(this.treatmentForm.value).subscribe({
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
