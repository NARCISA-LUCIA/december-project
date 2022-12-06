import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/service/company-service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {
  formControlGroup: FormGroup = this.formBuilder.group({
    name: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  });

  constructor(private location: Location,
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private toastr: ToastrService,
  private route:ActivatedRoute) { }

  ngOnInit(): void {
    const companyId = this.route.snapshot.params['id'];
    this.companyService.get(companyId).subscribe(company => {
      if (company) {
        this.formControlGroup = this.formBuilder.group({
          'name': new FormControl(company.name),
          'address': new FormControl(company.address),
          'city': new FormControl(company.city),
          'country': new FormControl(company.country),
          'email': new FormControl(company.email),
          'phone': new FormControl(company.phone)
        });
      }
    })
  }

  goBack(): void{
    this.location.back();
  }

  onSave():void {
    this.formControlGroup.getRawValue();
    let company: Company = new Company();
    company.name = this.formControlGroup.controls['name'].value;
    company.address = this.formControlGroup.controls['address'].value;
    company.city = this.formControlGroup.controls['city'].value;
    company.country = this.formControlGroup.controls['country'].value;
    company.email = this.formControlGroup.controls['email'].value;
    company.phone = this.formControlGroup.controls['phone'].value;
    this.companyService.update(company).subscribe((result) => {
      if (result) {
        this.showSuccess(company.name);
      }
      () => this.showFailure(company.name)
    });
  }

  showSuccess(companyName: string) {
    this.toastr.success('companyy' + " " + companyName + " " + 'was updated');
  }

  showFailure(companyName: string) {
    this.toastr.error('Company' + companyName + 'error company');
  }
}
