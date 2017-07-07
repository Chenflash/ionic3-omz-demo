export class PDAPageOpenOption {
    public Data: any;
    public OpenMode: PDAPageOpenMode;
    public ExtraInfo: any;

    constructor(data: any, openMode: PDAPageOpenMode, extraInfo: any) {
        this.Data = data;
        this.OpenMode = openMode;
        this.ExtraInfo = extraInfo;
    }
}

export enum PDAPageOpenMode {
    None,
    AddNew,
    Modify,
    Detail,
    Delete
}