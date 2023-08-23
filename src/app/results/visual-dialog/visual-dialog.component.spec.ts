import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualDialogComponent } from './visual-dialog.component';

describe('VisualDialogComponent', () => {
  let component: VisualDialogComponent;
  let fixture: ComponentFixture<VisualDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
