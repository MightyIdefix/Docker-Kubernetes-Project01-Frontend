import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Handworker } from "../models/handworkermodel";

@Injectable()
export class handworkerService {
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
  };

  addHandworker(handworker: Handworker): Observable<Handworker> {
    const url = environment.ENDPOINT.HANDWORKER + "/AddHaendvaerker";
    return this.http.post<Handworker>(url, handworker, this.httpOptions);
  }

  deleteHandworker(handworker: Handworker) {
    const url = environment.ENDPOINT.HANDWORKER + "/DeleteHaendvaerker";
    return this.http.delete(url, this.httpOptions);
  }

  updateHandworker(handworker: Handworker): Observable<Handworker> {
    const url = environment.ENDPOINT.HANDWORKER + "/UpdateHaendvaerker";
    return this.http.put<Handworker>(url, handworker, this.httpOptions);
  }

  getHandworker(handworker: Handworker): Observable<Handworker> {
      const url = environment.ENDPOINT.HANDWORKER + "/GetHaandvaerker";
      return this.http.get<Handworker>(url, this.httpOptions);
  }

  getAllHandworkers(): Observable<Array<Handworker>> {
    const url = environment.ENDPOINT.HANDWORKER + "/GetAllHaandvaerker";
    return this.http.get<Array<Handworker>>(url, this.httpOptions);
  }
}