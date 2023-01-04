import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Feature } from 'src/app/model/feature';
import { Project } from 'src/app/model/project';
import { FeatureService } from 'src/app/service/feature-service';

@Component({
  selector: 'app-feature-create',
  templateUrl: './feature-create.component.html',
  styleUrls: ['./feature-create.component.css'],
})
export class FeatureCreateComponent implements OnInit {
  formControlGroup: FormGroup = this.formBuilder.group({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(
    private formBuilder: FormBuilder,
    private featureService: FeatureService,
    private location: Location
  ) {}

  ngOnInit(): void { }
  
  createFeature(): void{
    this.formControlGroup.getRawValue();
    let feature: Feature = new Feature();

    feature.title = this.formControlGroup.controls['title'].value;
    feature.description = this.formControlGroup.controls['description'].value;
    feature.project = new Project();
    feature.project.id = 16;
    this.featureService.create(feature).subscribe((result: Feature) => {
      if (result) {
        console.log('result feature: ', result);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
