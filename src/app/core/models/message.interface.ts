export enum CustomMessageType {
    SEVERITY_SUCCESS = 'success',
    SEVERITY_INFO = 'info',
    SEVERITY_WARN = 'warn',
    SEVERITY_ERROR = 'error'
}

export interface CustomMessage {
    type: CustomMessageType;
    title: string;
    content: string;
}