import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../../model/employee/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   empUrl: string;
  constructor( private http: HttpClient) {
   this.empUrl ='http://localhost:8080/index/getAllEmployee';
  }
  public getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.empUrl);
  }
}
