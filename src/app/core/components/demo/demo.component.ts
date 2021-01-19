import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import {
  CreateUser,
  DeleteUser,
  UpdateUser,
} from 'src/app/core/store/actions/user.action';
import { DemoModalComponent } from '../demo-modal/demo-modal.component';

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
  constructor(
    private readonly store: Store,
    private readonly actRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {
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
   * Opens the DemoModalComponent, when the user clicks the Create User Button
   */
  openCreateModal(): void {
    const user: User = {
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    };
    const dialogRef = this.dialog.open(DemoModalComponent, {
      width: '250px',
      data: {
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.addUser(result);
    });
  }

  /**
   * Opens the Demo Modal Component when the user clicks a record on the table
   * @param index
   */
  openModifyModal(index: number): void {
    const userSubscribe = this.users$.subscribe((users) => {
      const user = users[index];

      const dialogRef = this.dialog.open(DemoModalComponent, {
        width: '250px',
        data: {
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          website: user.website,
        },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.updateUser(index, result);
        }
      });
    });
    userSubscribe.unsubscribe();
  }

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
