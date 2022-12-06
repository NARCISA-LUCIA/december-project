import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../model/company';
import { Observable } from 'rxjs';

@Injectable()
export class CompanyService {
  constructor(private httpClient: HttpClient) {}

  get(id: number): Observable<Company> {
    const url = '/api/company/' + id;
    return this.httpClient.get<Company>(url);
  }

  getAll(): Observable<Company[]> {
    return this.httpClient.get<Company[]>('/api/company/all', {
      headers: new HttpHeaders({ 'Test-Header': '2.10' }),
    });
  }

  create(company: Company): Observable<Company> {
    const url = '/api/company';
    return this.httpClient.post<Company>(url, company);
  }

  update(company: Company): Observable<Company> {
    const url = '/api/company';
    return this.httpClient.put<Company>(url, company);
  }

  delete(id: number): Observable<Company> {
    const url = '/api/company/' + id;
    return this.httpClient.delete<Company>(url);
  }
}
 