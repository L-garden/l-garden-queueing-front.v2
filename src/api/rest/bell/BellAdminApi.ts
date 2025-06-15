import {baseDelete, basePost} from "@/api/rest/baseApi";
import {ENDPOINT_BELL_ADMIN} from "@/constants/servers";

export const adminBellEnqueueApi = (bellNum: number): Promise<boolean> => {
    return basePost(`${ENDPOINT_BELL_ADMIN}/${bellNum}`, null).then((response) => {
        return response.data as boolean;
    })
}

export const adminBellDoneApi = (bellId: number): Promise<boolean> => {
    return basePost(`${ENDPOINT_BELL_ADMIN}/${bellId}/done`, null).then((response) => {
        return response.data as boolean;
    })
}

export const adminBellDeleteApi = (bellId: number): Promise<boolean> => {
    return baseDelete(`${ENDPOINT_BELL_ADMIN}/${bellId}`).then((response) => {
        return response.data as boolean;
    })
}
