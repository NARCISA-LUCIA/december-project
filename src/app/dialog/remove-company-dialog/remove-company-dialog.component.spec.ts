import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCompanyDialogComponent } from './remove-company-dialog.component';

describe('RemoveCompanyDialogComponent', () => {
  let component: RemoveCompanyDialogComponent;
  let fixture: ComponentFixture<RemoveCompanyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCompanyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCompanyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
