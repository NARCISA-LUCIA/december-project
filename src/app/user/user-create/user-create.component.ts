import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Company } from 'src/app/model/company';
import { User } from 'src/app/model/user';
import { LocalStorageService } from 'src/app/service/localstorage-service';
import { UserService } from 'src/app/service/user-service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  formControlGroup: FormGroup = this.formBuilder.group({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private location: Location,
    private localStorageService:LocalStorageService
  ) {}

  ngOnInit(): void {}

  createUser() {
    let companyId = this.localStorageService.getCompanyId();
    this.formControlGroup.getRawValue();
    let user: User = new User();
    user.firstName = this.formControlGroup.controls['firstName'].value;
    user.lastName = this.formControlGroup.controls['lastName'].value;
    user.email = this.formControlGroup.controls['email'].value;
    user.company = new Company();
    user.company.id = companyId;
    this.userService.create(user).subscribe((result: User) => {
      if (result) {
        console.log('result = ', result);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
