import {AccessRefreshToken} from "@/api/dto/admins/TokenDto";

export interface AdminsInfoResponse {
    id: number,
    name: string,
    createdAt: Date,
}

export interface AdminTokenNAdminsResponse {
    adminsInfo: AdminsInfoResponse,
    tokens: AccessRefreshToken,
}