import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Config } from '../../models/config.model';
import { SetConfig } from '../actions/config.action';

export class ConfigStateModel {
  config!: Config;
}

@State<ConfigStateModel>({
  name: 'config',
})
export class ConfigState {
  @Selector() static getConfig(state: ConfigStateModel) {
    return state.config;
  }

  @Action(SetConfig) add(
    { getState, patchState }: StateContext<ConfigStateModel>,
    { payload }: SetConfig
  ) {
    const state = getState();
    patchState({
      config: payload,
    });
  }
}
