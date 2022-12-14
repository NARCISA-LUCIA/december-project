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
import { InterceptorService } from './service/interceptor-service';
import { ProjectPageComponent } from './project/project-page/project-page.component';
import { ProjectService } from './service/project-service';
import { RemoveProjectDialogComponent } from './dialog/remove-project-dialog/remove-project-dialog.component';
import { LocalStorageService,LOCAL_STORAGE_SERVICE } from './service/localstorage-service';
import { LOCAL_STORAGE } from 'ngx-webstorage-service';
import { ProjectCreateComponent } from './project/project-create/project-create.component';
import { ProjectUpdateComponent } from './project/project-update/project-update.component';
import { UsersPageComponent } from './user/users-page/users-page.component';
import { UserService } from './service/user-service';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { RemoveUserDialogComponent } from './dialog/remove-user-dialog/remove-user-dialog.component';
import { UserUpdateComponent } from './user-update/user-update.component';


@NgModule({
  declarations: [AppComponent, CompaniesPageComponent, CompanyCreateComponent, HeaderComponent, FooterComponent,RemoveCompanyDialogComponent, CompanyUpdateComponent, ProjectPageComponent, RemoveProjectDialogComponent, ProjectCreateComponent, ProjectUpdateComponent, UsersPageComponent, UserCreateComponent, RemoveUserDialogComponent, UserUpdateComponent],
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
  providers: [HttpClient, CompanyService, ProjectService,  LocalStorageService, UserService, {provide: LOCAL_STORAGE_SERVICE, useExisting:LOCAL_STORAGE}, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
