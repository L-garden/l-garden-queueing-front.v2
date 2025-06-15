import {ChangePwRequest} from "@/api/dto/admins/AdminsRequest";
import {basePatch} from "@/api/rest/baseApi";
import {ENDPOINT_ADMINS_ADMIN} from "@/constants/servers";

export const adminsChangePwApi = (request: ChangePwRequest): Promise<boolean> => {
    return basePatch(`${ENDPOINT_ADMINS_ADMIN}/pw`, request).then((response) => {
        return response.data as boolean;
    })
}
