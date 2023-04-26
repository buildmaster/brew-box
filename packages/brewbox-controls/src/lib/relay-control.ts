import { Mutex } from 'async-mutex';
export class RelayControl {
  private _pin: number;
  private _isLit: boolean;
  private _mutex: Mutex;
  public constructor(pin: number) {
    this._mutex = new Mutex();
    this.pin = pin;
    this._isLit = false;
  }
  public set pin(pinNumber: number) {
    if (pinNumber < 1 || pinNumber > 26) {
      throw new Error('PIN for relay must be between 1 and 26');
    }
  }
  public get pin() {
    return this._pin;
  }
  public get isLit() {
    return this.isLit;
  }
  public set isLit(isLitStatus: boolean) {
    this._mutex
      .runExclusive(() => this.setRelay(isLitStatus))
      .then(() => (this._isLit = isLitStatus));
  }
  private setRelay(isLitStatus: boolean): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
