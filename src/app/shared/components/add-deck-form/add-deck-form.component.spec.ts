import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeckFormComponent } from './add-deck-form.component';

describe('AddDeckFormComponent', () => {
  let component: AddDeckFormComponent;
  let fixture: ComponentFixture<AddDeckFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeckFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeckFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
