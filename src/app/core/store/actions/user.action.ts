import { User } from '../../models/user.model';

export class CreateUser {
  static readonly type = '[USER] Create';
  constructor(public payload: User) {}
}

export class DeleteUser {
  static readonly type = '[USER] Delete';
  constructor(public payload: number) {}
}

export class UpdateUser {
  static readonly type = '[USER] Update';
  constructor(public index: number, public user: User) {}
}
