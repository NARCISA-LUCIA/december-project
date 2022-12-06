import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project-service';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css'],
})
export class ProjectUpdateComponent implements OnInit {
  currentProject: Project;
  formControlGroup: FormGroup = this.formBuilder.group({
    name: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let projectId = this.route.snapshot.params['id'];
    this.projectService.getById(projectId).subscribe((result) => {
      console.log(result);
      this.currentProject = result;
      this.formControlGroup = this.formBuilder.group({
        name: new FormControl(result.name),
        description: new FormControl(result.description),
      });
    });
  }

  onSave() {
    console.log('update form: ', this.formControlGroup.getRawValue());
    let project: Project = new Project();
    project.id = this.currentProject.id;
    project.company = this.currentProject.company;
    project.name = this.formControlGroup.controls['name'].value;
    project.description = this.formControlGroup.controls['description'].value;

    this.projectService.update(project).subscribe((result) => {
      console.log(result);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
