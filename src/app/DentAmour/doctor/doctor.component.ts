import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CoreService } from '../service/core.service';
import { DoctorService } from '../service/doctor.service';
import { DoctorcrudComponent } from './doctorcrud/doctorcrud.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  
  displayedColumns: string[] = [
    'id',
    'name',
    'mail',
    'phone',
    'designation',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor( private _dialog: MatDialog,
    private doctorService:DoctorService,
    private coreService:CoreService
    ) { }

  ngOnInit(): void {
    this.getDoctorList();
  }

  getDoctorList()
  {
    this.doctorService.getDoctor().subscribe({
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
    const dialogRef = this._dialog.open(DoctorcrudComponent);
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
    this.doctorService.deleteDoctor(id).subscribe({
      next: (res) => {
        this.coreService.openSnackBar('Employee deleted!', 'done');
        this.getDoctorList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    console.log(data);
    const dialogRef = this._dialog.open(DoctorcrudComponent, {
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
