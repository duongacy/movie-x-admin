import { IRap } from "./Rap";
export type IHeThongRap = {
    maHeThongRap: string;
    tenHeThongRap: string;
    logo: string;
    cumRapChieu: IRap[];//Danh sách các rạp thuộc 1 hãng nào đó(BHD Thảo Điền, BHD Lê Văn Việt)
}
