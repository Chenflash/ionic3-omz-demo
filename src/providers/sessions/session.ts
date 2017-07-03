import { Injectable } from '@angular/core';
import { ClientUserInfo } from './clientUserInfo';

export class Session {
  private sessionID: string;
  private userInfo: ClientUserInfo = new ClientUserInfo();

  // singleton instance
  private static instance: Session = new Session();

  public static get Instance(): Session {
    return Session.instance;
  }

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
    Session.instance = this;
  }

  public Clear() {
    this.sessionID = "";
  }
}
