import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-user-dialog',
  templateUrl: './remove-user-dialog.component.html',
  styleUrls: ['./remove-user-dialog.component.css']
})
export class RemoveUserDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<RemoveUserDialogComponent>) { }

  ngOnInit(): void {
  }

  onCancel(): void{
    this.dialogRef.close();
  }
}
