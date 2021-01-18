import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import {
  CreateUser,
  DeleteUser,
  UpdateUser,
} from 'src/app/core/store/actions/user.action';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  users$: Observable<User[]>;
  displayedColumns: string[] = [
    'index',
    'name',
    'username',
    'email',
    'phone',
    'website',
    'action',
  ];
  constructor(private store: Store, private actRoute: ActivatedRoute) {
    this.users$ = this.store.select((state) => state.users.users);
    this.actRoute.data.subscribe((data) => {
      data.users.forEach((user: User) => {
        this.addUser(user);
      });
    });
  }

  /**
   * Initializes the Demo Page
   */
  ngOnInit(): void {}

  /**
   * Used to add a User Object on the User Array on the Store
   * @param user
   */
  addUser(user: User) {
    this.store.dispatch(new CreateUser(user));
  }
  /**
   * Updates a User Object from the Store
   * @param index
   * @param user
   */
  updateUser(index: number, user: User) {
    this.store.dispatch(new UpdateUser(index, user));
  }

  /**
   * Deletes a User Object from the Store
   * @param index
   */
  deleteUser(index: any) {
    this.store.dispatch(new DeleteUser(index));
  }

  /**
   * Gets the User Array Object from the store
   */
  getUsers() {
    return this.users$;
  }
}
