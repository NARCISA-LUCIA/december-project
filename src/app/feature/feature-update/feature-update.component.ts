import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Feature } from 'src/app/model/feature';
import { FeatureService } from 'src/app/service/feature-service';

@Component({
  selector: 'app-feature-update',
  templateUrl: './feature-update.component.html',
  styleUrls: ['./feature-update.component.css'],
})
export class FeatureUpdateComponent implements OnInit {
  currentFeature: Feature;
  formControlGroup: FormGroup = this.formBuilder.group({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(
    private formBuilder: FormBuilder,
    private featureService: FeatureService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let featureId = this.route.snapshot.params['id'];
    this.featureService.get(featureId).subscribe((result) => {
      console.log(result);
      this.currentFeature = result;
      this.formControlGroup = this.formBuilder.group({
        title: new FormControl(result.title),
        description: new FormControl(result.description),
      });
    });
  }

  updateFeature(): void {
    this.formControlGroup.getRawValue();
    let feature: Feature = new Feature();
    feature.title = this.formControlGroup.controls['title'].value;
    feature.description = this.formControlGroup.controls['description'].value;
    this.featureService.update(feature).subscribe((result) => {
      console.log('update feature: ', result);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
