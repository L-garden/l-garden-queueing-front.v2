export default interface EventResponse<T> {
    eventType: string,
    eventObject: T,
}
