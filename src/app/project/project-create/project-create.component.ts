import { LocalStorageService } from './../../service/localstorage-service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project-service';
import { Company } from 'src/app/model/company';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  formControlGroup: FormGroup = this.formBuilder.group({
    name: new FormControl(''),
    description: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder,
    private serviceProject: ProjectService,
    private location: Location,
    private localStorageService: LocalStorageService,
    private toastr: ToastrService) {
    }

    ngOnInit(): void {

    }

  createProject() {
    console.log('form =', this.formControlGroup.getRawValue());
    let project: Project = new Project();
    project.name = this.formControlGroup.controls['name'].value;
    project.description = this.formControlGroup.controls['description'].value;
    project.company = new Company();
    project.company.id = 22;
    this.serviceProject.create(project).subscribe((result) => {
      if (result) {
        console.log('result ', result);
      }
    });
  }
    
  goBack(): void{
    this.location.back();
  }
  }
