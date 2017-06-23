export class PDARequest {
    public SysInfo: PDASysInfo;
    public Data: any;
    public ExtraInfo: any;
}

export class PDASysInfo {
    public SessionID: string;
    public FunctionID: string;
    public Updteprg: string;
}