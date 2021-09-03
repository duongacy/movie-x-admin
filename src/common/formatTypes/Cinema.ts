/* ------------------------------ hệ thống rạp ----------------------------- */
export type ICineplex = {
    maHeThongRap: string;
    tenHeThongRap: string;
    biDanh: string;
    logo: string;
};

/* --------------------------------- cụm rạp -------------------------------- */
export type ITheatre = {
    diaChi: string;
    maCumRap: string;
    tenCumRap: string;
    danhSachRap: IRoom[];
};

/* -------------------- phòng chiếu(trong API gọi là rạp) ------------------- */
export type IRoom = {
    maRap: string;
    tenRap: string;
};
