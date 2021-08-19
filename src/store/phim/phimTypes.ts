export const GET_ALL_PHIM = 'GET_ALL_PHIM';

export interface IPhimState {
    danhSachPhim: IPhim[];
}
export interface IPhim {
    maPhim?: number;
    tenPhim?: string;
    biDanh?: string;
    trailer?: string;
    hinhAnh?: string;
    moTa?: string;
    maNhom?: string;
    ngayKhoiChieu?: string;
    danhGia?: number;
    hot?: boolean;
    dangChieu?: boolean;
    sapChieu?: boolean;
}
