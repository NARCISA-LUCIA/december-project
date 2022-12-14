import { LocalStorageService } from './../../service/localstorage-service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RemoveUserDialogComponent } from 'src/app/dialog/remove-user-dialog/remove-user-dialog.component';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user-service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent implements OnInit {
  dataSource = new MatTableDataSource<User>([]);
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'remove'];
  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    let companyId = this.localStorageService.getCompanyId();
    this.userService.getAllUsersByCompanyId(23).subscribe((result) => {
      console.log(result);
      this.dataSource = new MatTableDataSource<User>(result);
    });
  }

  deleteUser(data: User): void {
    // let projectId = this.localStorageService.remove('ProjectId');
    this.localStorageService.removeProjectId();
    const name = data.firstName;
    const dialogRef = this.dialog.open(RemoveUserDialogComponent, {
      data: { name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        this.userService.delete(data.id).subscribe(
          () => {
            const index = this.dataSource.data.findIndex(
              (user) => user.id === data.id
            );
            this.dataSource.data.splice(index, 1);
            this.dataSource._updateChangeSubscription();
          },
          () => console.log('user was removed')
        );
      }
    });
  }
}
