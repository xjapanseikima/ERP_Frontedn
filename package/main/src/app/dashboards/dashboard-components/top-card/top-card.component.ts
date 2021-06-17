import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../../model/employee/employee.model";
import {EmployeeService} from "../../../../service/employee/employee.service";

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss']
})
export class TopCardComponent implements OnInit {
   emp: Employee[] = [];

  constructor( private empService: EmployeeService) {
  }
  ngOnInit(): void {
    this.getEmployee();
  }
  getEmployee() :void {
    this.empService.getAllEmployee().subscribe(data => {
      this.emp = data;
    });
  }
}
