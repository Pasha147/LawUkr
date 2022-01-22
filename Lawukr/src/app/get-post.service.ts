import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConsultForm } from './interfaces';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class GetPostService {
  constructor(private http: HttpClient, private messageServ: MessageService) {}

  postForm(formData:ConsultForm): Observable<string> {
    // const url: string = `http://localhost:3000/api/data/${5}`;
    const url: string = `https://ovlawyer.herokuapp.com/api/data/${5}`;
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
     let resp = this.http.post<string>(url, formData, httpOptions);
    return resp;
  }
}
