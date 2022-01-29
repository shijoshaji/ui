import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dept-show-del',
  templateUrl: './dept-show-del.component.html',
  styleUrls: ['./dept-show-del.component.scss']
})
export class DeptShowDelComponent implements OnInit {
  

  constructor(private service:SharedService) { }

  modalTitle:string=""
  ActivateAddEditDepComp:boolean=false
  dep:any

  DepartmentList:any=[]

  ngOnInit(): void {
    this.refreshDeptList()
  }


  refreshDeptList(){
    this.service.getDepartmentList().subscribe(data=>{
      this.DepartmentList=data
    })
  }


  // 

  addDepartmentClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.modalTitle="Add Department"
    this.ActivateAddEditDepComp=true

  }

  editDepartmentClick(item: any){
    this.dep=item
    this.modalTitle="Edit Department"
    this.ActivateAddEditDepComp=true
  }

  deleteDepartmentClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteDepartment(item.DepartmentId).subscribe(
        data=>{
          alert(data.toString())
          this.refreshDeptList()
        }
      )
    }
  }

  closeModalClick(){
    this.ActivateAddEditDepComp=false
    this.refreshDeptList()
    
  }
  

}
