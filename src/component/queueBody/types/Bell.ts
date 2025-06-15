export interface BellData {
    bellId: number;
    bellNum: number;
    bellStatus: 'WAITING' | 'DONE';
    modifiedAt: Date;
    createdAt: Date;
}