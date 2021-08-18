import { ICumRap } from "./CumRap";

export type IHeThongRap = {
    maHeThongRap?: string;
    tenHeThongRap?: string;
    biDanh?: string;
    logo?: string;
    cumRapChieu?: ICumRap[]; // danh sách các cụm rạp
};
