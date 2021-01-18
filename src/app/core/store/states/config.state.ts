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
  /**
   * Used to get the Config Object from the store
   * @param state
   */
  @Selector() static getConfig(state: ConfigStateModel) {
    return state.config;
  }
  /**
   *  Add Object data to the Config State
   * @param state
   * @param payload
   */
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
