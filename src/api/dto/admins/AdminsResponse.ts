import {AccessRefreshToken} from "@/api/dto/admins/TokenDto";
import {AdminRole} from "@/component/modalContent/adminSetting/AdminSetting.type";

export interface AdminsInfoResponse {
    adminId: number,
    adminName: string,
    adminRole: AdminRole
    createdAt: Date,
}

export interface AdminTokenNAdminsResponse {
    adminsInfo: AdminsInfoResponse,
    tokens: AccessRefreshToken,
}