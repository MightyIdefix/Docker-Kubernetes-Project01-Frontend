import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToolboxComponent } from './add-toolbox.component';

describe('AddToolboxComponent', () => {
  let component: AddToolboxComponent;
  let fixture: ComponentFixture<AddToolboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToolboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
