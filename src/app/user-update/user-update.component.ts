import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../service/user-service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent implements OnInit {
  formControlGroup: FormGroup = this.formBuilder.group({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let userId = this.route.snapshot.params['id'];
    this.userService.getById(userId).subscribe((result) => {
      console.log(result);
      this.formControlGroup = this.formBuilder.group({
        firstName: new FormControl(result.firstName),
        lastName: new FormControl(result.lastName),
        email: new FormControl(result.email),
      });
    });
  }

  updateUser() {
    this.formControlGroup.getRawValue();
    let user: User = new User();
    user.firstName = this.formControlGroup.controls['firstName'].value;
    user.lastName = this.formControlGroup.controls['lastName'].value;
    user.email = this.formControlGroup.controls['email'].value;

    this.userService.update(user).subscribe((result) => {
      console.log(result);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
