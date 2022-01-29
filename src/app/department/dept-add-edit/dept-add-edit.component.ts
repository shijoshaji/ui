import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dept-add-edit',
  templateUrl: './dept-add-edit.component.html',
  styleUrls: ['./dept-add-edit.component.scss']
})
export class DeptAddEditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input()dep:any;
  DepartmentId!: string;
  DepartmentName!: string;

  addDepartment(){
    var val ={
      DepartmentId: this.DepartmentId,
      DepartmentName : this.DepartmentName
    }
    this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString())
    })

  }

  updateDepartment(){
    var val ={
      DepartmentId: this.DepartmentId,
      DepartmentName : this.DepartmentName
    }
    this.service.updateDepartment(val).subscribe(res=>{
      alert(res.toString())
    })
    
  }

  ngOnInit(): void {
    this.DepartmentId=this.dep.DepartmentId
    this.DepartmentName=this.dep.DepartmentName
    
  }

}
