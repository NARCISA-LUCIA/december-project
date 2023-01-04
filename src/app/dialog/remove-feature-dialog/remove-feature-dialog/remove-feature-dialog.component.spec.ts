import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFeatureDialogComponent } from './remove-feature-dialog.component';

describe('RemoveFeatureDialogComponent', () => {
  let component: RemoveFeatureDialogComponent;
  let fixture: ComponentFixture<RemoveFeatureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFeatureDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFeatureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
