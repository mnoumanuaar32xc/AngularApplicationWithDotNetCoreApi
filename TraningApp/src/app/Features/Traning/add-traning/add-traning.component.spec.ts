import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTraningComponent } from './add-traning.component';

describe('AddTraningComponent', () => {
  let component: AddTraningComponent;
  let fixture: ComponentFixture<AddTraningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTraningComponent]
    });
    fixture = TestBed.createComponent(AddTraningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
