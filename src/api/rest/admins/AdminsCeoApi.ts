import {baseDelete, baseGet, basePost} from "@/api/rest/baseApi";
import {ENDPOINT_ADMINS_CEO} from "@/constants/servers";
import {AdminRegisterRequest} from "@/api/dto/admins/AdminsRequest";
import {Slice} from "@/api/rest/ResponseFormat";
import {AdminsInfoResponse} from "@/api/dto/admins/AdminsResponse";

export const ceoAdminsRegisterApi = (request: AdminRegisterRequest): Promise<boolean> => {
    return basePost(`${ENDPOINT_ADMINS_CEO}/register`, request).then((response) => {
        return response.data as boolean;
    })
}

export const ceoAdminsAdminDeleteApi = (adminId: number): Promise<boolean> => {
    return baseDelete(`${ENDPOINT_ADMINS_CEO}/${adminId}`).then((response) => {
        return response.data as boolean;
    })
}

export const ceoAdminsAdminListApi = (): Promise<Slice<AdminsInfoResponse>> => {
    return baseGet(`${ENDPOINT_ADMINS_CEO}/list`).then((response) => {
        return response.data as Slice<AdminsInfoResponse>;
    })
}
