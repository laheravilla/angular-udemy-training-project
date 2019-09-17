import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { global } from './global';

@Injectable()
export class ProjectService
{
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = global.url;
    }

    testService()
    {
        return 'Testing Angular service';
    }

    saveProject(project: Project): Observable<any>
    {
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'save-project', params, {headers: headers});
    }

    getAllProjects(): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'all-projects', {headers:headers});
    }

    getProject(id): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'project/' + id, {headers:headers});
    }

    deleteProject(id): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url + 'project/' + id, {headers:headers});
    }
}
