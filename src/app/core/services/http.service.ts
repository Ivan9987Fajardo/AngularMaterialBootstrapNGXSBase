import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Config } from '../models/config.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  config$: Observable<Config>;
  api!: string;
  constructor(private http: HttpClient, private store: Store) {
    this.config$ = this.store.select((state) => state.config.config);
    this.config$.subscribe((config) => {
      this.api = config.api;
    });
  }

  get(url: string): Observable<any> {
    return this.http.get(this.api + url);
  }
  post(url: string, body: JSON): Observable<any> {
    return this.http.post(this.api + url, body);
  }
  put(url: string, body: JSON): Observable<any> {
    return this.http.put(this.api + url, body);
  }
  delete(url: string): Observable<any> {
    return this.http.delete(this.api + url);
  }
}
