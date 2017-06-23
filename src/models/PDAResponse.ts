export class PDAResponse {
    public Data: any;
    public ExtraInfo: any;
    public ResponseException: PDAResponseException;
}

export class PDAResponseException {
    public ErrorID: string;
    public ErrorMessage: string;
    public IsConfirm: boolean;
    public IsError: boolean;
    public IsWarning: boolean;
    public IsInformation: boolean;
    public Severity: string;
    public ReturnValue: number;
    public ErrorPath: string;
    public DetailedMessage: string;
    public ExtraInfo: any;
}