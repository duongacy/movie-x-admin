import {
    getAPIOnlyToken,
    maNhomQuery,
    pageQuery,
    perPageQuery,
} from '../APIMethods/APIMethods.service';

export const layDanhSachBannerService = () => {
    const URL = `/api/QuanLyPhim/LayDanhSachBanner`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('layDanhSachBannerService', rs.data.content));
};

export const layDanhSachPhimService = (tenPhim: string = ``) => {
    const tenPhimQuery = tenPhim.trim() === `` ? `` : `&tenPhim=${tenPhim}`;
    let URL = `/api/QuanLyPhim/LayDanhSachPhim${maNhomQuery}${tenPhimQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('layDanhSachPhimService', rs.data.content));
};

export const layDanhSachPhimPhanTrangService = (
    page: number = 1,
    perPage: number = 10,
    tenPhim: string = ``
) => {
    const tenPhimQuery = tenPhim.trim() === `` ? `` : `&tenPhim=${tenPhim}`;

    const URL = `/api/QuanLyPhim/LayDanhSachPhimPhanTrang${maNhomQuery}${tenPhimQuery}${pageQuery(
        page
    )}${perPageQuery(perPage)}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('layDanhSachPhimPhanTrangService', rs.data.content));
};

export const layDanhSachPhimTheoNgayService = (
    tenPhim: string = '',
    page: number = 1,
    perPage: number = 10,
    tuNgay: string = '',
    denNgay: string = ''
) => {
    
    const tenPhimQuery = tenPhim.trim() === `` ? `` : `&tenPhim=${tenPhim}`;
    const tuNgayQuery = tuNgay.trim() === `` ? `` : `&tuNgay=${tuNgay}`;
    const denNgayQuery = denNgay.trim() === `` ? `` : `&denNgay=${denNgay}`;
    const URL = `/api/QuanLyPhim/LayDanhSachPhimTheoNgay${maNhomQuery}${tenPhimQuery}${pageQuery(page)}${perPageQuery(perPage)}${tuNgayQuery}${denNgayQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('layDanhSachPhimTheoNgayService', rs.data.content));
};

export const layThongTinPhimService = (maPhim: string = '') => {
    const maPhimQuery = maPhim.trim() === `` ? `` : `MaPhim=${maPhim}`;
    const URL = `/api/QuanLyPhim/LayThongTinPhim${maPhimQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('layThongTinPhimService', rs.data));
};
console.log('hihi');
