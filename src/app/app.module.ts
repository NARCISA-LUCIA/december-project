import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompaniesPageComponent } from './company/companies-page/companies-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CompanyService } from './service/company-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CompaniesPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpClient, CompanyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
