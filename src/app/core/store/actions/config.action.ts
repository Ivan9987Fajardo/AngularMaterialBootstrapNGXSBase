import { Config } from '../../models/config.model';

export class SetConfig {
  static readonly type = '[CONFIG] Set';
  constructor(public payload: Config) {}
}
