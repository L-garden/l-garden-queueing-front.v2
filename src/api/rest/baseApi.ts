import {SERVER_URL} from "@/constants/servers";
import {ResponseFormat} from "@/api/rest/ResponseFormat";

export const baseGet = (path: string): Promise<ResponseFormat> => {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const basePost = (path: string, body: any): Promise<ResponseFormat> => {
    return fetch(`${SERVER_URL}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    }).then(async (response) => {
        const responseBody = await response.json() as ResponseFormat;
        if (!response.ok) {
            if (responseBody.code && responseBody.message) {
                return responseBody;
            } else {
                console.log("백엔드 통신 에러", response.status, response.statusText, response);
                throw new Error('백엔드 통신 에러');
            }
        }
        return responseBody;
    });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const basePatch = (path: string, body: any): Promise<ResponseFormat> => {
    return fetch(`${SERVER_URL}${path}`, {
        method: "PATCH",
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

export const baseDelete = (path: string): Promise<ResponseFormat> => {
    return fetch(`${SERVER_URL}${path}`, {
        method: 'DELETE'
    }).then((response) => {
        if (!response.ok) {
            console.log("백엔드 통신 에러", response.status, response.statusText);
            throw new Error('백엔드 통신 에러');
        }
        return response.json();
    });
}
