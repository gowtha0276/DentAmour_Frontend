import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TreatmentService {
  constructor(private _http: HttpClient) {}

  getTreatment(): Observable<any> {
    return this._http.get('http://localhost:8080/api/treatment/getAllTreatments');
  }

  addTreatment(data:any): Observable<any> {
    return this._http.post('http://localhost:8080/api/treatment/create',data);
  }

  updateTreatment(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:8080/api/treatment/update?id=${id}`, data);
  }

  deleteTreatment(id: any): Observable<any> {
    return this._http.delete(`http://localhost:8080/api/treatment/delete?id=${id}`);
  }
}
