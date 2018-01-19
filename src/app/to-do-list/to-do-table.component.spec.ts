import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoTableComponent } from './to-do-table.component';

describe('ToDoTableComponent', () => {
  let component: ToDoTableComponent;
  let fixture: ComponentFixture<ToDoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
