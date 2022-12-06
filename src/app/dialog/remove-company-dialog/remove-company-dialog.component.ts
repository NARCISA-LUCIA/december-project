import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-company-dialog',
  templateUrl: './remove-company-dialog.component.html',
  styleUrls: ['./remove-company-dialog.component.css']
})
export class RemoveCompanyDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveCompanyDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

  onClose(): void{
    this.dialogRef.close();
  }
  
}
