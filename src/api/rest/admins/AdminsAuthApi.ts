import {basePost} from "@/api/rest/baseApi";
import {AdminLoginRequest, AdminRegisterRequest} from "@/api/dto/admins/AdminsRequest";
import {ENDPOINT_ADMINS_AUTH} from "@/constants/servers";
import {deleteCookie, getCookie, setCookie} from "cookies-next";
import {redirect} from "@/i18n/navigation";
import {AdminTokenNAdminsResponse} from "@/api/dto/admins/AdminsResponse";

export const authAdminsRegisterApi = (request: AdminRegisterRequest): Promise<boolean> => {
    return basePost(`${ENDPOINT_ADMINS_AUTH}/register`, request).then((response) => {
        return response.data as boolean;
    });
}

export const authAdminsLoginApi = async (request: AdminLoginRequest): Promise<boolean> => {
    const response = await basePost(`${ENDPOINT_ADMINS_AUTH}/login`, request);
    if (response.code !== "OK") {
        console.log(response.code)
        alert(response.message);
        return false;
    }
    setTokenNadmins(response.data as AdminTokenNAdminsResponse);
    return true;
}

export const authAdminsRefreshApi = async (): Promise<boolean> => {
    const response = await basePost(`${ENDPOINT_ADMINS_AUTH}/refresh`, getCookie('refresh'));
    removeTokenNAdmins();
    if (response.code !== "OK") {
        console.log(response.code);
        redirect({href: '/queue', locale: `${getCookie("NEXT_LOCALE")}`});
        return false;
    }
    setTokenNadmins(response.data as AdminTokenNAdminsResponse);
    return true;
}

const setTokenNadmins = (tokenNadmins: AdminTokenNAdminsResponse): boolean => {
    const adminsInfo = tokenNadmins.adminsInfo;
    sessionStorage.setItem('adminsInfo', JSON.stringify(adminsInfo));

    const accessRefreshToken = tokenNadmins.tokens;
    sessionStorage.setItem("access", accessRefreshToken.access.token);
    setCookie('refresh', accessRefreshToken.refresh.token, {
        path: '/',
        maxAge: accessRefreshToken.refresh.tokenExpireTime / 1000,
        httpOnly: false,
        sameSite: 'lax',
        // httpOnly: (process.env.NODE_ENV === "production" ? true : false), // 프론트, 백엔드 웹서버 통합 시 사용
        // sameSite: (process.env.NODE_ENV === "production" ? 'strict' : 'lax'),
    });
    return true;
}

const removeTokenNAdmins = () => {
    sessionStorage.removeItem('adminsInfo');
    sessionStorage.removeItem('access');
    deleteCookie('refresh');
}