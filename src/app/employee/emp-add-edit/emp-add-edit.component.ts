import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {

  constructor() { }

  @Input()emp:any;

  ngOnInit(): void {
  }

}
