import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraningListComponent } from './traning-list.component';

describe('TraningListComponent', () => {
  let component: TraningListComponent;
  let fixture: ComponentFixture<TraningListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraningListComponent]
    });
    fixture = TestBed.createComponent(TraningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
