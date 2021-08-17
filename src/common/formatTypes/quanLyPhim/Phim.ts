export type ILayDanhSachPhim = {
    maNhom: string;
    tenPhim?: string;
};
export type ILayDanhSachPhimPhanTrang = {
    maNhom: string;
    tenPhim?: string;
    soTrang: number;
    soPhanTuTrenTrang: number;
};

export type ILayDanhSachPhimTheoNgay = {//Phải tùy vào trường hợp sẽ dùng các query này để lấy danh sách phim
    maNhom: string;
    tenPhim?: string;
    soTrang?: number;
    soPhanTuTrenTrang?: number;
    tuNgay: string;
    denNgay: string;
};

export type IPhim = {
    maPhim: number;
    tenPhim: string;
    biDanh: string;
    trailer: string;
    hinhAnh: string;
    moTa: string;
    maNhom: string;
    ngayKhoiChieu: string;
    danhGia: number;
    hot: boolean;
    dangChieu: boolean;
    sapChieu: boolean;
};
