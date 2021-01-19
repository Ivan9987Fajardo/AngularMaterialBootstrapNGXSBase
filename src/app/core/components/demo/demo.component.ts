import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  active = 1;
  users$: Observable<User[]>;

  constructor(
    private readonly store: Store,
    private readonly actRoute: ActivatedRoute,
    private readonly modalService: NgbModal
  ) {
    this.users$ = this.store.select((state) => state.users.users);
    const routeData$ = this.actRoute.data.subscribe((data) => {
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
   * Opens the modal to create user object
   */
  createUserModal() {
    const demoModal = this.modalService.open(DemoModalComponent);
    demoModal.componentInstance.user = {};
    const returnDemoModal$ = demoModal.componentInstance.passEntry.subscribe(
      (receivedEntry: User) => {
        returnDemoModal$.unsubscribe();
        this.addUser(receivedEntry);
        demoModal.close();
      }
    );
  }
  /**
   * Opens the modal to update user object
   */
  updateUserModal(index: number) {
    const demoModal = this.modalService.open(DemoModalComponent);
    demoModal.componentInstance.user = {};
    const userData$ = this.users$.subscribe((users: User[]) => {
      const user: User = Object.assign({}, users[index]);
      demoModal.componentInstance.user = user;
    });
    userData$.unsubscribe();
    const returnDemoModal$ = demoModal.componentInstance.passEntry.subscribe(
      (receivedEntry: User) => {
        returnDemoModal$.unsubscribe();
        this.updateUser(index, receivedEntry);
        demoModal.close();
      }
    );
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
  /**
   * Tracks the users array by its username
   * @param index
   * @param user
   */
  trackByUsername(index: number, user: User): string {
    return user.username;
  }
}
