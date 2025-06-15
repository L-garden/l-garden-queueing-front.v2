import {basePost} from "@/api/rest/baseApi";
import {AdminLoginRequest, AdminRegisterRequest, RefreshTokenRequest} from "@/api/dto/admins/AdminsRequest";
import {AccessRefreshToken} from "@/api/dto/admins/TokenDto";
import {ENDPOINT_ADMINS_AUTH} from "@/constants/servers";

export const authAdminsRegisterApi = (request: AdminRegisterRequest): Promise<boolean> => {
    return basePost(`${ENDPOINT_ADMINS_AUTH}/register`, request).then((response) => {
        return response.data as boolean;
    });
}

export const authAdminsLoginApi = (request: AdminLoginRequest): Promise<AccessRefreshToken> => {
    return basePost(`${ENDPOINT_ADMINS_AUTH}/login`, request).then((response) => {
        return response.data as AccessRefreshToken;
    });
}

export const authAdminsRefreshApi = (request: RefreshTokenRequest): Promise<AccessRefreshToken> => {
    return basePost(`${ENDPOINT_ADMINS_AUTH}/refresh`, request).then((response) => {
        return response.data as AccessRefreshToken;
    });
}
