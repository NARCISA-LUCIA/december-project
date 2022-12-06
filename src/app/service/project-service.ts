import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../model/project';

@Injectable()
export class ProjectService {
  constructor(private httpClient: HttpClient) {}

  create(project: Project): Observable<Project> {
    const url = '/api/project';
    return this.httpClient.post<Project>(url, project);
  }

  getById(id: number): Observable<Project> {
    const url = '/api/project/' + id;
    return this.httpClient.get<Project>(url);
  }

  getAllProjectsForCompany(companyId: number): Observable<Project[]> {
    const url = '/api/project/company/' + companyId;
    return this.httpClient.get<Project[]>(url);
  }

  update(project: Project): Observable<Project> {
    const url = '/api/project';
    return this.httpClient.put<Project>(url, project);
  }

  delete(id: number): Observable<void> {
    const url = '/api/project/' + id;
    return this.httpClient.delete<void>(url);
  }
}
