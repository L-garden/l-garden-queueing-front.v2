export interface AdminRegisterRequest {
    userId: string,
    name: string,
    password: string,
}

export interface AdminLoginRequest {
    userId: string,
    password: string,
}

export interface RefreshTokenRequest {
    refreshToken: string,
}

export interface ChangePwRequest {
    userId: string,
    pw: string,
    pwChk: string,
}