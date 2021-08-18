import axios from 'axios';
import { DOMAIN, TOKEN_CYBERSOFT, MA_NHOM } from '../../config';

const maNhomQuery = `maNhom=${MA_NHOM}`;

const getAPIOnlyToken = (URL: string) => {
    return axios.get(URL, {
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
        },
    });
};

export const layDanhSachBannerService = () => {
    const URL = `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('layDanhSachBannerService', rs.data.content));
};

export const layDanhSachPhimService = (tenPhim: string = ``) => {
    const tenPhimQuery = tenPhim.trim() === `` ? `` : `tenPhim=${tenPhim}`;
    let URL = `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?${maNhomQuery}&${tenPhimQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('layDanhSachPhimService', rs.data.content));
};

export const layDanhSachPhimPhanTrangService = (
    soTrang: number,
    soPhanTuTrenTrang: number,
    tenPhim: string = ``
) => {
    const soTrangQuery = `soTrang=${soTrang}`;
    const soPhanTuTrenTrangQuery = `soPhanTuTrenTrang=${soPhanTuTrenTrang}`;
    const tenPhimQuery = tenPhim.trim() === `` ? `` : `tenPhim=${tenPhim}`;

    const URL = `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhimPhanTrang?${maNhomQuery}&${tenPhimQuery}&${soTrangQuery}&${soPhanTuTrenTrangQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('layDanhSachPhimPhanTrangService', rs.data.content));
};

export const layDanhSachPhimTheoNgayService = (
    tenPhim: string = '',
    soTrang: number = 1,
    soPhanTuTrenTrang: number = 10,
    tuNgay: string = '',
    denNgay: string = ''
) => {
    const soTrangQuery = `soTrang=${soTrang}`;
    const soPhanTuTrenTrangQuery = `soPhanTuTrenTrang=${soPhanTuTrenTrang}`;
    const tenPhimQuery = tenPhim.trim() === `` ? `` : `tenPhim=${tenPhim}`;
    const tuNgayQuery = tuNgay.trim() === `` ? `` : `tuNgay=${tuNgay}`;
    const denNgayQuery = denNgay.trim() === `` ? `` : `denNgay=${denNgay}`;
    const URL = `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhimTheoNgay?${maNhomQuery}&${tenPhimQuery}&${soTrangQuery}&${soPhanTuTrenTrangQuery}&${tuNgayQuery}&${denNgayQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('layDanhSachPhimTheoNgayService', rs.data.content));
};

export const layThongTinPhimService = (maPhim: string = '') => {
    const maPhimQuery = maPhim.trim() === `` ? `` : `MaPhim=${maPhim}`;
    const URL = `${DOMAIN}/api/QuanLyPhim/LayThongTinPhim?${maPhimQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('layThongTinPhimService', rs.data));
};
