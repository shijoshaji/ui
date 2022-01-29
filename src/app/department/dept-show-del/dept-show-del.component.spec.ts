import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptShowDelComponent } from './dept-show-del.component';

describe('DeptShowDelComponent', () => {
  let component: DeptShowDelComponent;
  let fixture: ComponentFixture<DeptShowDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptShowDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptShowDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
