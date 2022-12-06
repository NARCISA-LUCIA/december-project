import { CompanyCreateComponent } from './company/company-create/company-create.component';
import { CompaniesPageComponent } from './company/companies-page/companies-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyUpdateComponent } from './company/company-update/company-update.component';
import { ProjectPageComponent } from './project/project-page/project-page.component';
import { ProjectCreateComponent } from './project/project-create/project-create.component';
import { ProjectUpdateComponent } from './project/project-update/project-update.component';

const routes: Routes = [
  { path: 'companies', component: CompaniesPageComponent },
  { path: 'company/create', component: CompanyCreateComponent },
  { path: 'company/:id/update', component: CompanyUpdateComponent },
  { path: 'projects', component: ProjectPageComponent },
  { path: 'project/create', component: ProjectCreateComponent },
  { path: 'project/:id/update', component: ProjectUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
