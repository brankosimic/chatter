import { observable, action } from 'mobx';
import { Checker } from '../models/checker';
export class SettingsStore {
  @observable slider = 30;
  @observable checks: Checker = {
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  };
  @observable radio = false;

  @action
  public setSlider = (value: number): void => {
    this.slider = value;
  };

  @action
  public setChecks = (value: Checker): void => {
    this.checks = value;
  };

  @action
  public setRadio = (value: boolean): void => {
    this.radio = value;
  };
}
