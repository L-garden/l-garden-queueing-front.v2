import {ChangePwRequest} from "@/api/dto/admins/AdminsRequest";
import {ENDPOINT_ADMINS_ADMIN} from "@/constants/servers";
import {baseAuthGet, baseAuthPatch} from "@/api/rest/baseAuthApi";
import {AdminsIdResponse} from "@/api/dto/admins/AdminsResponse";

export const adminsChangePwApi = (request: ChangePwRequest): Promise<boolean> => {
    return baseAuthPatch(`${ENDPOINT_ADMINS_ADMIN}/pw`, request).then((response) => {
        return response.data as boolean;
    })
}


export const adminsGetIdApi = (): Promise<AdminsIdResponse> => {
    return baseAuthGet(`${ENDPOINT_ADMINS_ADMIN}/id`).then((response) => {
        return response.data as AdminsIdResponse;
    })
}
