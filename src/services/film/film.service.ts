import { getAPIOnlyToken, maNhomQuery } from '../APIMethods/APIMethods.service';

const tenPhimQuery = (tenPhim: string = ``) => {
    return tenPhim === `` ? `` : `&tenPhim=${tenPhim.trim()}`;
};

const pageQuery = (page: number) => `&soTrang=${page}`;
const perPageQuery = (perPage: number) => `&soPhanTuTrenTrang=${perPage}`;
const fromDateQuery = (date: string) => (date === `` ? `` : `&tuNgay=${date}`);
const toDateQuery = (date: string) => (date === `` ? `` : `&denNgay=${date}`);

export const getALlBannerService = () => {
    const URL = `/api/QuanLyPhim/LayDanhSachBanner`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('layDanhSachBannerService', rs.data.content));
    return response;
};

export const getAllFilmByNamePaginationService = (
    tenPhim: string,
    page: number,
    perPage: number
) => {
    const URL = `/api/QuanLyPhim/LayDanhSachPhimPhanTrang?${maNhomQuery}${tenPhimQuery(
        tenPhim
    )}${pageQuery(page)}${perPageQuery(perPage)}`;
    return getAPIOnlyToken(URL);
};

export const getAllFilmByDatePaginationService = (
    tenPhim: string,
    tuNgay: string,
    denNgay: string,
    page: number,
    perPage: number
) => {
    const URL = `/api/QuanLyPhim/LayDanhSachPhimTheoNgay?${maNhomQuery}${tenPhimQuery(
        tenPhim
    )}${pageQuery(page)}${perPageQuery(perPage)}${fromDateQuery(tuNgay)}${toDateQuery(denNgay)}`;
    return getAPIOnlyToken(URL);
};
