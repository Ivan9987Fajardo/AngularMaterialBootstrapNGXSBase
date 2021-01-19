import { Action, Selector, State, StateContext } from '@ngxs/store';
import { User } from '../../models/user.model';
import { CreateUser, DeleteUser, UpdateUser } from '../actions/user.action';

export class UserStateModel {
  users!: User[];
}

@State<UserStateModel>({
  name: 'users',
  defaults: {
    users: [],
  },
})
export class UserState {
  /**
   * Returns the users object from the state
   * @param state
   */
  @Selector() static getUsers(state: UserStateModel) {
    return state.users;
  }

  /**
   * Adds a user object to the state
   * @param state
   * @param payload
   */
  @Action(CreateUser) add(
    { getState, patchState }: StateContext<UserStateModel>,
    { payload }: CreateUser
  ) {
    const state = getState();
    patchState({
      users: [...state.users, payload],
    });
  }

  /**
   * Updates a User Object in the state
   * @param param0
   * @param param1
   */
  @Action(UpdateUser) update(
    { getState, patchState }: StateContext<UserStateModel>,
    { index, user }: UpdateUser
  ) {
    const state = getState().users.filter(
      (user, indexFun) => indexFun != index
    );
    state.splice(index, 0, user);
    patchState({
      users: state,
    });
  }

  /**
   * Remove a user object from the state
   * @param param0
   * @param param1
   */
  @Action(DeleteUser) remove(
    { getState, patchState }: StateContext<UserStateModel>,
    { payload }: DeleteUser
  ) {
    const state = getState();
    patchState({
      users: state.users.filter((user, index) => index != payload),
    });
  }
}
