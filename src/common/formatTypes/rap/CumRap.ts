import { IPhim } from "../phim/Phim";
import { IRap } from "./Rap";
import { ISuatChieu } from "./SuatChieu";

export type ICumRap = {
    maCumRap?: string;
    tenCumRap?: string;
    hinhAnh?: string;
    diaChi?: string;
    danhSachPhim?: IPhim[];//Danh sách phim
    lichChieuPhim?: ISuatChieu[];// Danh sách các suất chiếu
    danhSachRap?: IRap[];// Danh sách các rạp
};
