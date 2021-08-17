import { ISuatChieu } from './SuatChieu';

export type IRap = {
    maCumRap: string;
    tenCumRap: string;
    hinhAnh: string;
    diaChi: string;
    lichChieuPhim: ISuatChieu[];//danh sách các suất chiếu
};
