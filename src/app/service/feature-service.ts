
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature } from '../model/feature';

@Injectable()
export class FeatureService{
    constructor(private httpClient: HttpClient) { }
    
    create(feature:Feature): Observable<Feature>{
        const url = '/api/feature';
        return this.httpClient.post<Feature>(url, feature);
    }
    
    update(feature: Feature): Observable<Feature>{
        const url = '/api/feature';
        return this.httpClient.put<Feature>(url, feature);
    }

    get(id: number): Observable<Feature>{
        const url = '/api/feature/' + id;
        return this.httpClient.get<Feature>(url);
    }

    getAllFeaturesByProjectId(projectId: number): Observable<Feature[]>{
        const url = '/api/feature/project/' + projectId;
        return this.httpClient.get<Feature[]>(url);
    }

    delete(id: number): Observable<void>{
        const url = '/api/feature/' + id;
        return this.httpClient.delete<void>(url);
    }
}