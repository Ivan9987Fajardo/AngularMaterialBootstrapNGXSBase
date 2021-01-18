import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Config } from '../models/config.model';
import { SetConfig } from '../store/actions/config.action';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  configUrl: string = 'assets/config.json';
  config: Observable<Config>;
  constructor(private http: HttpClient, private store: Store) {
    this.config = this.store.select((state) => state.config);
  }
  /**
   * Gets the value from config.json and adds it to the 'config' object in the store
   */
  init() {
    return new Promise<void>((resolve, reject) => {
      console.log('AppInitService.init() called');
      this.http.get<Config>(this.configUrl).subscribe((config) => {
        this.store.dispatch(new SetConfig(config));

        console.log('AppInitService Finished');
        resolve();
      });
    });
  }
}
