import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  create(user: User): Observable<User> {
    const url = '/api/user';
    return this.httpClient.post<User>(url, user);
    }
    
    update(user: User): Observable<User>{
        const url = '/api/user';
        return this.httpClient.put<User>(url, user);
    }

    getById(id:number): Observable<User>{
        const url = '/api/user/' + id;
        return this.httpClient.get<User>(url);
    }

    getAllUsersByCompanyId(companyId: number): Observable<User[]>{
        const url = '/api/user/company/' + companyId;
        return this.httpClient.get<User[]>(url);
    }

    delete(id: number): Observable<void>{
        const url = '/api/user/' + id;
        return this.httpClient.delete<void>(url);
    }

}
