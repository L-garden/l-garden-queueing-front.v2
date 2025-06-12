import {Client} from "@stomp/stompjs";
import SockJS from "sockjs-client";
import {RefObject, useEffect, useRef} from "react";
import {SERVER_URL} from "@/constants/servers";

const getSocketClient = (endPoint?: string, reconnectDelay?: number) => {
    return new Client({
        webSocketFactory: () => new SockJS(`${SERVER_URL}${endPoint || "/pubsub"}`),
        reconnectDelay: reconnectDelay || 1000,
    });
}

export const useSocketClient = (
    subEndpoint: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    subCallback: (data: any) => void,
    stompEndpoint?: string
) => {
    const clientRef = useRef(Client.prototype);
    useEffect(() => {
        const client = getSocketClient(stompEndpoint);
        client.onConnect = () => {
            client.subscribe(subEndpoint, (message) => {
                const data = JSON.parse(message.body);
                subCallback(data);
            });
        }
        client.activate();
        clientRef.current = client;
        return () => {
            client.deactivate();
        };
    }, [clientRef, subEndpoint]);
    return clientRef;
}

export const socketPub = (
    socketClient: RefObject<Client>,
    pubEndpoint: string,
    body: string
) => {
    if (socketClient.current && socketClient.current.connected) {
        socketClient.current.publish({
            destination: `${pubEndpoint}`,
            body: body
        });
    }
}