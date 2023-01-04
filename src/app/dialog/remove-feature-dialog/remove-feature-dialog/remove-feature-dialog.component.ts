import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-feature-dialog',
  templateUrl: './remove-feature-dialog.component.html',
  styleUrls: ['./remove-feature-dialog.component.css']
})
export class RemoveFeatureDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef:MatDialogRef<RemoveFeatureDialogComponent>) { }

  ngOnInit(): void {
  }

  onCancel(): void{
    this.dialogRef.close();
  }
}
