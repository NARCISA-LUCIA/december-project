import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company-service';
import { Location } from '@angular/common';
import { Company } from 'src/app/model/company';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css'],
})
export class CompanyCreateComponent implements OnInit {
  formControlGroup: FormGroup = this.formBuilder.group({
    id: new FormControl(''),
    name: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    registrationNumber: new FormControl(''),
    vatNumber: new FormControl(''),
    administratorList: new FormControl('')
  
  });

  constructor(
    private location: Location,
    private companyService: CompanyService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  createCompany(): void {
    let company: Company = new Company();
    this.formControlGroup.getRawValue();

    company.id = this.formControlGroup.controls['id'].value;
    company.name = this.formControlGroup.controls['name'].value;
    company.address = this.formControlGroup.controls['address'].value;
    company.city = this.formControlGroup.controls['city'].value;
    company.country = this.formControlGroup.controls['country'].value;
    company.email = this.formControlGroup.controls['email'].value;
    company.phone = this.formControlGroup.controls['phone'].value;
    company.registrationNumber =
      this.formControlGroup.controls['registrationNumber'].value;
    company.vatNumber = this.formControlGroup.controls['vatNumber'].value;
    company.administratorList = this.formControlGroup.controls['administratorList'].value;
   
    this.companyService.create(company).subscribe((result) => {
      if (result) {
        console.log('create company: ', result);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
