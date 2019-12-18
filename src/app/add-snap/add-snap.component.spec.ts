import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSnapComponent } from './add-snap.component';

describe('AddSnapComponent', () => {
  let component: AddSnapComponent;
  let fixture: ComponentFixture<AddSnapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSnapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
