export interface IMessage {
    name: string | undefined;
    message: string
}

export interface IUser {
    name: string
}

export const LOGGED_USER: IUser = { name: '' };

export const MESSAGES: IMessage[] = [
];
