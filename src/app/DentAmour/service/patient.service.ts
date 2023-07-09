import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private _http: HttpClient) {}
  baseUrl='http://localhost:8080/api/';
  entity='patient/'
  getPatient(): Observable<any> {
    return this._http.get(this.baseUrl+this.entity+'getAllPatients');
  }

  addPatient(data:any): Observable<any> {
    return this._http.post(this.baseUrl+this.entity+'create',data);
  }

  updatePatient(id: number, data: any): Observable<any> {
    return this._http.put(this.baseUrl+this.entity+`update?id=${id}`, data);
  }

  deletePatient(id: any): Observable<any> {
    return this._http.delete(this.baseUrl+this.entity+`delete?id=${id}`,id);
  }

  getPatientByPhoneOrRegId(value:any):Observable<any>{
    return this._http.get(this.baseUrl+this.entity+`getByPhoneOrRegistrationId?searchInput=${value}`,value);
  }
}
