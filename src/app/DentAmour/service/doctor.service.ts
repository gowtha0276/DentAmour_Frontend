import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor(private _http: HttpClient) {}

  getDoctor(): Observable<any> {
    return this._http.get('http://localhost:8080/api/doctor/get');
  }

  addDoctor(data:any): Observable<any> {
    return this._http.post('http://localhost:8080/api/doctor/create',data);
  }

  updateDoctor(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:8080/api/doctor/update?id=${id}`, data);
  }

  deleteDoctor(id: any): Observable<any> {
    return this._http.delete(`http://localhost:8080/api/doctor/delete?id=${id}`);
  }
}
