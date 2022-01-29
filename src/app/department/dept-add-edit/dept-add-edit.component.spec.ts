import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptAddEditComponent } from './dept-add-edit.component';

describe('DeptAddEditComponent', () => {
  let component: DeptAddEditComponent;
  let fixture: ComponentFixture<DeptAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
