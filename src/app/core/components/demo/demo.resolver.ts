import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { HttpService } from '../../services/http.service';
@Injectable()
export class DemoResolver implements Resolve<User> {
  constructor(private http: HttpService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    return this.http.get('/users');
  }
}
