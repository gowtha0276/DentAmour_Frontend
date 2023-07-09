import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { patientDiagnosis } from '../models/patientDiagnosis.model';

@Injectable({
  providedIn: 'root',
})
export class PatientDiagnosisService {
  constructor(private _http: HttpClient) {}
  baseUrl='http://localhost:8080/api/';
  entity='patientDiagnosis/'

  addPatientDiagnosis(data:patientDiagnosis): Observable<any> {
    return this._http.post(this.baseUrl+this.entity+'create',data);
}
}
