import { LocalStorageService } from './../../service/localstorage-service';
import { ProjectService } from './../../service/project-service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from 'src/app/model/project';
import { RemoveProjectDialogComponent } from 'src/app/dialog/remove-project-dialog/remove-project-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
})
export class ProjectPageComponent implements OnInit {
  dataSource = new MatTableDataSource<Project>([]);
  displayedColumns: string[] = ['name', 'description', 'remove'];
  constructor(
    private dialog: MatDialog,
    private projectService: ProjectService,
    private toastr: ToastrService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    let companyId = this.localStorageService.getCompanyId();
    this.projectService
      .getAllProjectsForCompany(companyId)
      .subscribe((result) => {
        console.log(result);
        if (result) {
          this.dataSource = new MatTableDataSource<Project>(result);
        }
      })
  }

  deleteProject(project: Project): void {
    this.openRemoveDialog(project);
  }

  openRemoveDialog(project: Project) {
    const name = 'Project' + project.name;
    const dialogRef = this.dialog.open(RemoveProjectDialogComponent, {
      data: { name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('dialog closed');
      if (result != null) {
        this.projectService.delete(project.id).subscribe(
          () => {
            console.log('project was removedd');
            const index = this.dataSource.data.findIndex(
              (p) => p.id === project.id
            );
            this.dataSource.data.splice(index, 1);
            this.dataSource._updateChangeSubscription();
            this.showSuccess(project.name);
          },
          () => this.showFailure(project.name)
        );
      }
    });
  }

  showSuccess(projectName: string) {
    this.toastr.success('project' + ' ' + projectName + ' ' + 'wass deleted');
  }

  showFailure(projectName: string) {
    this.toastr.error('project error ' + projectName + ' ' + 'was not deleted');
  }
}
