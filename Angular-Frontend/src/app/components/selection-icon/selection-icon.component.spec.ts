import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionIconComponent } from './selection-icon.component';

describe('SelectionIconComponent', () => {
  let component: SelectionIconComponent;
  let fixture: ComponentFixture<SelectionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
