export interface IMessage {
    userId: number | null | undefined;
    message: string
}

export type IMessages = IMessage[];
