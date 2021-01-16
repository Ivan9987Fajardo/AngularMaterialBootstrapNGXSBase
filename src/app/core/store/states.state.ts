import { StateClass } from '@ngxs/store/internals';
import { ConfigState } from './states/config.state';
import { UserState } from './states/user.state';

export const STATES: StateClass<any>[] = [UserState, ConfigState];
