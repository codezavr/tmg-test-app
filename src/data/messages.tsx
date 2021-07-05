export interface IMessage {
    name: string | undefined;
    message: string
}

export type IMessages = IMessage[];

export interface IUser {
    name: string
}

export const LOGGED_USER: IUser = { name: '' };

export const MESSAGES: IMessages = [
];
