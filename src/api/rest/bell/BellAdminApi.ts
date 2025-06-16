import {ENDPOINT_BELL_ADMIN} from "@/constants/servers";
import {baseAuthDelete, baseAuthPost} from "@/api/rest/baseAuthApi";

export const adminBellEnqueueApi = (bellNum: number): Promise<boolean> => {
    return baseAuthPost(`${ENDPOINT_BELL_ADMIN}/${bellNum}`, null).then((response) => {
        return response.data as boolean;
    })
}

export const adminBellDoneApi = (bellId: number): Promise<boolean> => {
    return baseAuthPost(`${ENDPOINT_BELL_ADMIN}/${bellId}/done`, null).then((response) => {
        return response.data as boolean;
    })
}

export const adminBellDeleteApi = (bellId: number): Promise<boolean> => {
    return baseAuthDelete(`${ENDPOINT_BELL_ADMIN}/${bellId}`).then((response) => {
        return response.data as boolean;
    })
}
