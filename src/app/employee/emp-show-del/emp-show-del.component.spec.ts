import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpShowDelComponent } from './emp-show-del.component';

describe('EmpShowDelComponent', () => {
  let component: EmpShowDelComponent;
  let fixture: ComponentFixture<EmpShowDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpShowDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpShowDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
