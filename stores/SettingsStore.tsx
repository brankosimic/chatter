import { observable, action } from 'mobx';

export class SettingsStore {
  @observable slider = 30;
  @observable checks: any = {
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  };
  @observable radio = false;

  @action
  public setSlider = (value) => {
    this.slider = value;
  };

  @action
  public setChecks = (value) => {
    this.checks = value;
  };

  @action
  public setRadio = (value) => {
    this.radio = value;
  };
}
