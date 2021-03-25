import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Tool } from "../models/toolmodel";
import { ThrowStmt } from "@angular/compiler";

@Injectable()
export class toolService { 
    constructor(private http: HttpClient) {
    }
  
    httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
      })
    };

    addTool(tool: Tool): Observable<Tool> {
        const url = environment.ENDPOINT.TOOL + "/AddVaerktoej";
        return this.http.post<Tool>(url, tool, this.httpOptions);
    }

    deleteTool(tool: Tool) {
        const url = environment.ENDPOINT.TOOL + "/DeleteVaerktoej";
        return this.http.delete(url, this.httpOptions);
    }

    updateTool(tool: Tool): Observable<Tool> {
        const url = environment.ENDPOINT.TOOL;
        return this.http.put<Tool>(url, tool, this.httpOptions);
    }

    getTool(tool: Tool): Observable<Tool> {
        const url = environment.ENDPOINT.TOOL;
        return this.http.get<Tool>(url, this.httpOptions);
    }

    getAllTools(): Observable<Array<Tool>> {
        const url = environment.ENDPOINT.TOOL
        return this.http.get<Array<Tool>>(url, this.httpOptions);
    }
}