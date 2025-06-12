import {SERVER_URL} from "@/constants/servers";

export const baseGet = (path: string) => {
    return fetch(`${SERVER_URL}${path}`, {
        method: 'GET'
    }).then((response) => {
        if (!response.ok) {
            console.log("백엔드 통신 에러", response.status, response.statusText);
            throw new Error('백엔드 통신 에러');
        }
        return response.json();
    });
}

export const basePost = (path: string, body: any) => {
    return fetch(`${SERVER_URL}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    }).then((response) => {
        if (!response.ok) {
            console.log("백엔드 통신 에러", response.status, response.statusText);
            throw new Error('백엔드 통신 에러');
        }
        return response.json();
    });
}