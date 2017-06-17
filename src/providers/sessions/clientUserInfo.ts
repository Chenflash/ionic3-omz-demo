import { Injectable } from '@angular/core';

@Injectable()
export class ClientUserInfo {
    private userId: string;
    private userName: string;

    public get UserID(): string {
        return this.userId;
    }

    public set UserID(value: string) {
        this.userId = value;
    }

    public get UserName(): string {
        return this.userName;
    }

    public set UserName(value: string) {
        this.userName = value;
    }
}