import {ENDPOINT_ADMINS_CEO} from "@/constants/servers";
import {AdminRegisterRequest} from "@/api/dto/admins/AdminsRequest";
import {Slice} from "@/api/rest/ResponseFormat";
import {AdminsInfoResponse} from "@/api/dto/admins/AdminsResponse";
import {baseAuthDelete, baseAuthGet, baseAuthPost} from "@/api/rest/baseAuthApi";

export const ceoAdminsRegisterApi = (request: AdminRegisterRequest): Promise<boolean> => {

    return baseAuthPost(`${ENDPOINT_ADMINS_CEO}/register`, request).then((response) => {
        if (response.code !== "OK") {
            throw response.code;
        }
        return response.data as boolean;
    })
}

export const ceoAdminsAdminDeleteApi = (adminId: number): Promise<boolean> => {
    return baseAuthDelete(`${ENDPOINT_ADMINS_CEO}/${adminId}`).then((response) => {
        return response.data as boolean;
    })
}

export const ceoAdminsAdminListApi = (): Promise<Slice<AdminsInfoResponse>> => {
    return baseAuthGet(`${ENDPOINT_ADMINS_CEO}/list`).then((response) => {
        return response.data as Slice<AdminsInfoResponse>;
    })
}

