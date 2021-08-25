export interface IFilm {
    // Lấy thông tin phim
    maPhim: number;
    tenPhim: string;
    biDanh: string;
    trailer: string;
    hinhAnh: string;
    moTa: string;
    maNhom: string;
    hot?: boolean;
    dangChieu?: boolean;
    sapChieu?: boolean;
    ngayKhoiChieu: string;
    danhGia?: number;
}

export interface IDeleteFilm {
    MaPhim: number;
}

export interface IFilmInput {
    tenPhim: string;
    biDanh:string;
    trailer: string;
    moTa: string;
    maNhom: string;
    ngayKhoiChieu: string;
    sapChieu?: boolean;
    dangChieu?: boolean;
    hot?: boolean;
    danhGia?: number;
    hinhAnh: File | undefined;
}

export interface ICreateFilm {
    // Cần xem lại API
    filmData: IFilmInput;
}

export interface IUpdateFilm {
    // Cần xem lại API
    maPhim: number;
    filmData: IFilmInput;
}
