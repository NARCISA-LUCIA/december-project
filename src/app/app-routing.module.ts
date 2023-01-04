import { FeaturePageComponent } from './feature/feature-page/feature-page.component';
import { CompanyCreateComponent } from './company/company-create/company-create.component';
import { CompaniesPageComponent } from './company/companies-page/companies-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyUpdateComponent } from './company/company-update/company-update.component';
import { ProjectPageComponent } from './project/project-page/project-page.component';
import { ProjectCreateComponent } from './project/project-create/project-create.component';
import { ProjectUpdateComponent } from './project/project-update/project-update.component';
import { UsersPageComponent } from './user/users-page/users-page.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { FeatureCreateComponent } from './feature/feature-create/feature-create.component';
import { FeatureUpdateComponent } from './feature/feature-update/feature-update.component';

const routes: Routes = [
  { path: 'companies', component: CompaniesPageComponent },
  { path: 'company/create', component: CompanyCreateComponent },
  { path: 'company/:id/update', component: CompanyUpdateComponent },
  { path: 'projects', component: ProjectPageComponent },
  { path: 'project/create', component: ProjectCreateComponent },
  { path: 'project/:id/update', component: ProjectUpdateComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'user/create', component: UserCreateComponent },
  { path: 'user/:id/update', component: UserUpdateComponent },
  { path: 'features', component: FeaturePageComponent },
  { path: 'feature/create', component: FeatureCreateComponent },
  { path: 'feature/:id/update', component: FeatureUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
