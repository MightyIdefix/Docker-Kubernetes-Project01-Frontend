import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHandworkerComponent } from './add-handworker.component';

describe('AddHandworkerComponent', () => {
  let component: AddHandworkerComponent;
  let fixture: ComponentFixture<AddHandworkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHandworkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHandworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
