import { IHeThongRap } from './HeThongRap';
export type ILayThongTinLichChieuPhim = {
    maPhim: string;
};
export type IThongTinLichChieuPhim = {
    maPhim: number;
    tenPhim: string;
    biDanh: string;
    trailer: string;
    hinhAnh: string;
    moTa: string;
    maNhom: string;
    hot: boolean;
    dangChieu: boolean;
    sapChieu: boolean;
    ngayKhoiChieu: string;
    danhGia: number;
    heThongRapChieu: IHeThongRap[]; //tất cả các hệ thống rạp có chiếu phim này (BHD hoặc CGV)
};
