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
  @Selector() static getUsers(state: UserStateModel) {
    return state.users;
  }

  @Action(CreateUser) add(
    { getState, patchState }: StateContext<UserStateModel>,
    { payload }: CreateUser
  ) {
    const state = getState();
    patchState({
      users: [...state.users, payload],
    });
  }

  @Action(UpdateUser) update(
    { getState, patchState }: StateContext<UserStateModel>,
    { index, user }: UpdateUser
  ) {
    let state = getState().users.filter((user, index) => index != index);
    state[index] = user;
    patchState({
      users: state,
    });
  }

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
