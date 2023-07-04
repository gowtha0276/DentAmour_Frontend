import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private _http: HttpClient) {}

  getPatient(): Observable<any> {
    return this._http.get('http://localhost:8080/api/patient/get');
  }

  addPatient(data:any): Observable<any> {
    return this._http.post('http://localhost:8080/api/patient/create',data);
  }

  updatePatient(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:8080/api/patient/update?id=${id}`, data);
  }

  deletePatient(id: any): Observable<any> {
    return this._http.delete(`http://localhost:8080/api/patient/delete?id=${id}`);
  }
}
