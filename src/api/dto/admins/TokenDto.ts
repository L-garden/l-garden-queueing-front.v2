export interface JwtToken {
    token: string;
    tokenExpireTime: number;
}

export interface AccessRefreshToken {
    access: JwtToken;
    refresh: JwtToken;
}
