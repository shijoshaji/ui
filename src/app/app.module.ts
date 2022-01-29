import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpAddEditComponent } from './employee/emp-add-edit/emp-add-edit.component';
import { EmpShowDelComponent } from './employee/emp-show-del/emp-show-del.component';
import { DeptAddEditComponent } from './department/dept-add-edit/dept-add-edit.component';
import { DeptShowDelComponent } from './department/dept-show-del/dept-show-del.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'



@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    EmployeeComponent,
    EmpAddEditComponent,
    EmpShowDelComponent,
    DeptAddEditComponent,
    DeptShowDelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
