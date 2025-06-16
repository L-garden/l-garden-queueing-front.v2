import {SERVER_URL} from "@/constants/servers";
import {ResponseFormat} from "@/api/rest/ResponseFormat";
import {authAdminsRefreshApi} from "@/api/rest/admins/AdminsAuthApi";

export const baseAuthGet = (path: string, retry: boolean = false): Promise<ResponseFormat> => {
    return fetch(`${SERVER_URL}${path}`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem("access")}`,
        },
    }).then(async (response) => {
        const responseBody = await response.json() as ResponseFormat;
        if (!response.ok) {
            if (responseBody.code && responseBody.message) {
                if (responseBody.code === "TOKEN_EXPIRED" && !retry) {
                    authAdminsRefreshApi();
                    return baseAuthGet(path, true);
                }
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
export const baseAuthPost = (path: string, body: any, retry: boolean = false): Promise<ResponseFormat> => {
    return fetch(`${SERVER_URL}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("access")}`,
        },
        body: JSON.stringify(body),
    }).then(async (response) => {
        const responseBody = await response.json() as ResponseFormat;
        if (!response.ok) {
            if (responseBody.code && responseBody.message) {
                if (responseBody.code === "TOKEN_EXPIRED" && !retry) {
                    authAdminsRefreshApi();
                    return baseAuthPost(path, body, true);
                }
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
export const baseAuthPatch = (path: string, body: any, retry: boolean = false): Promise<ResponseFormat> => {
    return fetch(`${SERVER_URL}${path}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("access")}`,
        },
        body: JSON.stringify(body),
    }).then(async (response) => {
        const responseBody = await response.json() as ResponseFormat;
        if (!response.ok) {
            if (responseBody.code && responseBody.message) {
                if (responseBody.code === "TOKEN_EXPIRED" && !retry) {
                    authAdminsRefreshApi();
                    return baseAuthPatch(path, body, true);
                }
                return responseBody;
            } else {
                console.log("백엔드 통신 에러", response.status, response.statusText, response);
                throw new Error('백엔드 통신 에러');
            }
        }
        return responseBody;
    });
}

export const baseAuthDelete = (path: string, retry: boolean = false): Promise<ResponseFormat> => {
    return fetch(`${SERVER_URL}${path}`, {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem("access")}`,
        },
    }).then(async (response) => {
        const responseBody = await response.json() as ResponseFormat;
        if (!response.ok) {
            if (responseBody.code && responseBody.message) {
                if (responseBody.code === "TOKEN_EXPIRED" && !retry) {
                    authAdminsRefreshApi();
                    return baseAuthDelete(path, true);
                }
                return responseBody;
            } else {
                console.log("백엔드 통신 에러", response.status, response.statusText, response);
                throw new Error('백엔드 통신 에러');
            }
        }
        return responseBody;
    });
}
