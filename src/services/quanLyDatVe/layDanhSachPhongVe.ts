import { getAPIOnlyToken } from '../APIMethods/APIMethods.service';

export const layDanhSachPhongVeService = (maLichChieu: number) => {
    const maLichChieuQuery = `?MaLichChieu=${maLichChieu}`;
    const URL = `/api/QuanLyDatVe/LayDanhSachPhongVe${maLichChieuQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => {
        console.log('layDanhSachPhongVeService', rs.data.content);
    });
};
