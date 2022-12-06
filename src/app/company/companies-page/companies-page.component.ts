import { RemoveCompanyDialogComponent } from './../../dialog/remove-company-dialog/remove-company-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CompanyService } from './../../service/company-service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from 'src/app/model/company';
import { FormBuilder, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-companies-page',
  templateUrl: './companies-page.component.html',
  styleUrls: ['./companies-page.component.css'],
})
export class CompaniesPageComponent implements OnInit {
  dataSource: MatTableDataSource<Company> = new MatTableDataSource<Company>([]);
  company: Company[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'address',
    'city',
    'country',
    'email',
    'phone',
    'registrationNumber',
    'vatNumber',
    'remove',
  ];

  constructor(
    private companyService: CompanyService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllCompanies();
  }

  getAllCompanies(): void {
    this.companyService.getAll().subscribe((result) => {
      this.dataSource = new MatTableDataSource<Company>(result);
    });
  }

  deleteCompany(company: Company):void {
    this.openDialog(company);
  }

  openDialog(company: Company): void {
    const name = company.name;
    const dialogRef = this.dialog.open(RemoveCompanyDialogComponent, {
      data: { name },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
      if (result != null) {
        this.companyService.delete(company.id).subscribe(
          () => {
            console.log('company was removed');
            const index = this.dataSource.data.findIndex(
              p => p.id === company.id
            );
            this.dataSource.data.splice(index, 1);
            this.dataSource._updateChangeSubscription();
            this.showSuccess(company.name);
          },
          () => this.showFailure(company.name)
        );
      }
    });
  }
  showSuccess(companyName: string) {
    this.toastr.success('Company' + " " + companyName + " " + 'was removeddd');
  }

  showFailure(companyName: string) {
    this.toastr.error('Company' + companyName + 'was not removed');
  }
}
