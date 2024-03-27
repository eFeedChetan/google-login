import { Inject, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = environment.baseUrl;
  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  sendOtp(payload?: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/event/sendOtp`, payload);
  }
  submitPaper(payload?: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/event`, payload);
  }
}
