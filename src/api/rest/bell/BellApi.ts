import {Slice} from "@/api/rest/ResponseFormat";
import {BellInfoResponse} from "@/api/dto/bell/BellResponse";
import {baseGet} from "@/api/rest/baseApi";
import {ENDPOINT_BELL} from "@/constants/servers";

export const bellListApi = (): Promise<Slice<BellInfoResponse>> => {
    return baseGet(`${ENDPOINT_BELL}/list`).then((response) => {
        return response.data as Slice<BellInfoResponse>;
    });
}
