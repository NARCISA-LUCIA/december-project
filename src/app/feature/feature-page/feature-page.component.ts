import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RemoveFeatureDialogComponent } from 'src/app/dialog/remove-feature-dialog/remove-feature-dialog/remove-feature-dialog.component';
import { Feature } from 'src/app/model/feature';
import { FeatureService } from 'src/app/service/feature-service';

@Component({
  selector: 'app-feature-page',
  templateUrl: './feature-page.component.html',
  styleUrls: ['./feature-page.component.css'],
})
export class FeaturePageComponent implements OnInit {
  displayedColumns: string[] = ['title', 'description', 'remove'];
  dataSource: MatTableDataSource<Feature>;
  constructor(
    private featureService: FeatureService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getFeatures();
  }

  getFeatures(): void {
    this.featureService.getAllFeaturesByProjectId(31).subscribe((result) => {
      console.log('feature id:', result);
      this.dataSource = new MatTableDataSource<Feature>(result);
    });
  }

  deleteFeature(data: Feature): void {
    const title = data.title;
    const dialogRef = this.dialog.open(RemoveFeatureDialogComponent, {
      data: { title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        this.featureService.delete(data.id).subscribe(
          () => {
            console.log('feature was removed');
            const index = this.dataSource.data.findIndex(
              (feature) => feature.id === data.id
            );
            this.dataSource.data.splice(index, 1);
            this.dataSource._updateChangeSubscription();
          },
          () => console.log('feature was not removed')
        );
      }
    });
  }
}
