import { MatDialog } from '@angular/material/dialog';
import { CompanyService } from './../../service/company-service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from 'src/app/model/company';
import { FormBuilder, FormControl } from '@angular/forms';

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
    'administratorList',
  ];

  constructor(
    private companyService: CompanyService,
    private matDialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllCompanies();
  }

  getAllCompanies(): void {
    this.companyService.getAll().subscribe((result) => {
      this.dataSource = new MatTableDataSource<Company>(result);
    });
  }
}
