import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProjectDialogComponent } from './remove-project-dialog.component';

describe('RemoveProjectDialogComponent', () => {
  let component: RemoveProjectDialogComponent;
  let fixture: ComponentFixture<RemoveProjectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveProjectDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveProjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
