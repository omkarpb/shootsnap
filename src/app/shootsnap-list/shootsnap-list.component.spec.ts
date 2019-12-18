import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootsnapListComponent } from './shootsnap-list.component';

describe('ShootsnapListComponent', () => {
  let component: ShootsnapListComponent;
  let fixture: ComponentFixture<ShootsnapListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShootsnapListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShootsnapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
