import {Client} from "@stomp/stompjs";
import SockJS from "sockjs-client";
import {RefObject, useEffect, useRef} from "react";
import {ENDPOINT_STOMP_DEFAULT, SERVER_URL} from "@/constants/servers";
import EventResponse from "@/api/stomp/EventResponse";

const getSocketClient = (endPoint?: string, reconnectDelay?: number) => {
    return new Client({
        webSocketFactory: () => new SockJS(`${SERVER_URL}${endPoint || ENDPOINT_STOMP_DEFAULT}`),
        reconnectDelay: reconnectDelay || 1000,
    });
}

export const useSocketClient = <T>(
    subEndpoints: string[],
    subCallback: (data: EventResponse<T>) => void,
    stompEndpoint?: string
) => {
    const clientRef = useRef(Client.prototype);
    useEffect(() => {
        const client = getSocketClient(stompEndpoint);
        client.onConnect = () => {
            subEndpoints.forEach((subEndpoint) => {
                client.subscribe(subEndpoint, (message) => {
                    const data = JSON.parse(message.body);
                    subCallback(data);
                });
            });
        }
        client.activate();
        clientRef.current = client;
        return () => {
            client.deactivate();
        };
    }, [clientRef, subEndpoints, stompEndpoint, subCallback]);
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