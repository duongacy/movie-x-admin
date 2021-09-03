import { IFilmInput } from '../../common/formatTypes/Film';
import {
    getAPIToken,
    maNhomQuery,
    postAPITokenAuthor,
    postAPIToken,
    deleteAPITokenAuthor,
} from '../APIMethods/APIMethods.service';

const tenPhimQuery = (tenPhim: string = ``) => {
    return tenPhim === `` ? `` : `&tenPhim=${tenPhim.trim()}`;
};

const pageQuery = (page: number) => `&soTrang=${page}`;
const perPageQuery = (perPage: number) => `&soPhanTuTrenTrang=${perPage}`;
const fromDateQuery = (date: string) => (date === `` ? `` : `&tuNgay=${date}`);
const toDateQuery = (date: string) => (date === `` ? `` : `&denNgay=${date}`);
const maPhimQuery = (maPhim: number) => `MaPhim=${maPhim}`;

export const getALlBannerService = () => {
    const URL = `/api/QuanLyPhim/LayDanhSachBanner`;
    const response = getAPIToken(URL);
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
    return getAPIToken(URL);
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
    return getAPIToken(URL);
};

export const addFilmService = (film: FormData) => {
    const URL = '/api/QuanLyPhim/ThemPhimUploadHinh';
    return postAPIToken(URL, film);
};

export const updateFilmService = (film: FormData) => {
    const URL = '/api/QuanLyPhim/CapNhatPhimUpload';
    return postAPITokenAuthor(URL, film);
};

export const deleteFilmService = (maPhim: number) => {
    const URL = `/api/QuanLyPhim/XoaPhim?${maPhimQuery(maPhim)}`;
    return deleteAPITokenAuthor(URL);
};

export const getFilmByIdService = (maPhim: number) => {
    const URL = `/api/QuanLyPhim/LayThongTinPhim?${maPhimQuery(maPhim)}`;
    return getAPIToken(URL);
};
