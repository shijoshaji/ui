import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://127.0.0.1:8000"
  readonly dept_path = "/department/"
  readonly emp_path = "/employee/"

  constructor(private http:HttpClient) { }


  // DEPARTMENT API
  getDepartmentList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+this.dept_path);
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+this.dept_path,val)
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+this.dept_path,val)
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+this.dept_path+val)
  }

  // EMPLOYEE API
  getEmployeeList():Observable<any[]>{
    
    return this.http.get<any[]>(this.APIUrl+this.emp_path);
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+this.emp_path,val)
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+this.emp_path,val)
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+this.emp_path+val)
  }



}
