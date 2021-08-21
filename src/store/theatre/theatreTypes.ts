export const GET_ALL_MULTIPLEX_BY_FILM = '@@theatre/GET_ALL_MULTIPLEX_BY_FILM';
export const GET_ALL_THEATRE_GROUP_BY_MULTIPLEX = '@@theatre/GET_ALL_THEATRE_GROUP_BY_MULTIPLEX';
export const GET_SHOW_TIMES = '@@theatre/GET_SHOW_TIMES';

export interface IRoom {
    maRap: string;
    tenRap: string;
}
export interface ITheatre {
    maCumRap: string;
    tenCumRap: string;
    hinhAnh: string;
    diaChi: string;
    danhSachPhim?: any[]; //Danh sách phim
    lichChieuPhim?: any[]; // Danh sách các suất chiếu
    danhSachRap?: IRoom[]; // Danh sách các rạp
}
export interface IMultiplex {
    maHeThongRap?: string;
    tenHeThongRap?: string;
    biDanh?: string;
    logo?: string;
    cumRapChieu?: ITheatre[]; // danh sách các cụm rạp
}
