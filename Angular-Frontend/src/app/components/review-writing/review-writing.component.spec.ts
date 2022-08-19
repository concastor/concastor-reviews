import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewWritingComponent } from './review-writing.component';

describe('ReviewWritingComponent', () => {
  let component: ReviewWritingComponent;
  let fixture: ComponentFixture<ReviewWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewWritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
