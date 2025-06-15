export interface ResponseFormat {
    code: string,
    message: string,
    data: object | boolean | string,
}

export interface Slice<T> {
    content: T[],
    first: boolean,
    last: boolean,
    size: number,
    numberOfElements: number,
    empty: boolean,
}
