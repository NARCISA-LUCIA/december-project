import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompaniesPageComponent } from './company/companies-page/companies-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CompanyService } from './service/company-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompanyCreateComponent } from './company/company-create/company-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { RemoveCompanyDialogComponent } from './dialog/remove-company-dialog/remove-company-dialog.component';
import { ToastrModule } from 'ngx-toastr';
import { CompanyUpdateComponent } from './company/company-update/company-update.component';
import { InterceptorService } from './interceptor-service';

@NgModule({
  declarations: [AppComponent, CompaniesPageComponent, CompanyCreateComponent, HeaderComponent, FooterComponent,RemoveCompanyDialogComponent, CompanyUpdateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    ToastrModule.forRoot()
  ],
  providers: [HttpClient, CompanyService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
