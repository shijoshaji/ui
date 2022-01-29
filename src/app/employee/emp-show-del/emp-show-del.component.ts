import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-emp-show-del',
  templateUrl: './emp-show-del.component.html',
  styleUrls: ['./emp-show-del.component.scss']
})
export class EmpShowDelComponent implements OnInit {

  constructor(private service:SharedService) { }

  employeeList:any=[]
  modalTitle:string=""
  ActivateAddEditDepComp:boolean=false
  emp:any

  ngOnInit(): void {
    this.refreshEmpList()
  }

  refreshEmpList(){
    this.service.getEmployeeList().subscribe(data=>{
      this.employeeList=data
    })
  }


  // 

  addDepartmentClick(){
    this.emp={
      DepartmentId:0,
      DepartmentName:""
    }
    this.modalTitle="Add Employee"
    this.ActivateAddEditDepComp=true

  }

  editDepartmentClick(item: any){
    this.emp=item
    this.modalTitle="Edit Employee"
    this.ActivateAddEditDepComp=true
  }

  deleteDepartmentClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteDepartment(item.DepartmentId).subscribe(
        data=>{
          alert(data.toString())
          this.refreshEmpList()
        }
      )
    }
  }

  closeModalClick(){
    this.ActivateAddEditDepComp=false
    this.refreshEmpList()
    
  }

}
