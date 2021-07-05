export interface IError {
    id: number,
    message: string
}

export const ERRORS: IError[] = [
    { id: 1, message: 'You have to set your name to send messages' },
];
