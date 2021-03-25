import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { VaerktoejsKasse } from '../models/toolboxmodel';
import { Tool } from '../models/toolmodel';

@Injectable()
export class toolboxService {
    constructor(private http: HttpClient) {
    }
    
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
      };

    addVaerktoejsKasse(toolbox: VaerktoejsKasse): Observable<VaerktoejsKasse> {
        const url = environment.ENDPOINT.TOOLBOX + "/AddVaerktoejKasse";
        return this.http.post<VaerktoejsKasse>(url, toolbox, this.httpOptions);
    }

    updateVaerktoejsKasse(toolbox: VaerktoejsKasse): Observable<VaerktoejsKasse> {
        const url = environment.ENDPOINT.TOOLBOX + "/UpdateVaerktoejKasse";
        return this.http.put<VaerktoejsKasse>(url, toolbox, this.httpOptions);
    }

    deleteVaerktoejsKasse(toolbox: VaerktoejsKasse): Observable<VaerktoejsKasse> {
        const url = environment.ENDPOINT.TOOLBOX + "/DeleteVaerktoejKasse";
        return this.http.delete<VaerktoejsKasse>(url, this.httpOptions);
    }

    getVaerktoejsKasse(toolbox: VaerktoejsKasse): Observable<VaerktoejsKasse> {
        const url = environment.ENDPOINT.TOOLBOX;
        return this.http.get<VaerktoejsKasse>(url, this.httpOptions);
    }

    getAllVaerktoejsKasser(): Observable<Array<VaerktoejsKasse>> {
        const url = environment.ENDPOINT.TOOLBOX
        return this.http.get<Array<VaerktoejsKasse>>(url, this.httpOptions);
    }
}