export type MA_LOAI_NGUOI_DUNG = 'KhachHang' | 'QuanTri';
export type IUser = {
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDt: string | null;
    matKhau: string;
    maLoaiNguoiDung: MA_LOAI_NGUOI_DUNG;
};
