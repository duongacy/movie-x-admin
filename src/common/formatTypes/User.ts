export type MA_LOAI_NGUOI_DUNG = 'KhachHang' | 'QuanTri';
export interface IUser {
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDt: string | null;
    matKhau: string;
    maLoaiNguoiDung: MA_LOAI_NGUOI_DUNG;
}

export interface IUserInput extends IUser {
    maNhom: string;
}
