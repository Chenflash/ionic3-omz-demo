import { Injectable } from '@angular/core';
import { ClientUserInfo } from './clientUserInfo';

@Injectable()
export class Session {
  private sessionID: string;
  private userInfo: ClientUserInfo;

  public get UserInfo(): ClientUserInfo {
    return this.userInfo;
  }

  public set UserInfo(value: ClientUserInfo) {
    this.userInfo = value;
  }

  public get SessionID(): string {
    return this.sessionID;
  }

  public set SessionID(value: string) {
    this.sessionID = value;
  }

  constructor() {
    this.userInfo = new ClientUserInfo();
  }

  public Clear() {
    this.sessionID = "";
  }
}
