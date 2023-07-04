import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CoreService } from '../service/core.service';
import { DoctorService } from '../service/doctor.service';
import { TreatmentcrudComponent } from './treatmentcrud/treatmentcrud.component';
import { TreatmentService } from '../service/treatment.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'textInput',
    'stepTreatment',
    'multipleStep',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor( private _dialog: MatDialog,
    private treatmentService:TreatmentService,
    private coreService:CoreService
    ) { }

  ngOnInit(): void {
    this.getDoctorList();
  }

  getDoctorList()
  {
    this.treatmentService.getTreatment().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  openDoctorCrudForm()
  {
    const dialogRef = this._dialog.open(TreatmentcrudComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getDoctorList();
        }
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteDoctor(id: number) {
    this.treatmentService.deleteTreatment(id).subscribe({
      next: (res) => {
        this.coreService.openSnackBar('Treatment deleted!', 'done');
        this.getDoctorList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    console.log(data);
    const dialogRef = this._dialog.open(TreatmentcrudComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getDoctorList();
        }
      },
    });
  }

}
