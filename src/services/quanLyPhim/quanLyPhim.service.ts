import {
    getAPIOnlyToken,
    maNhomQuery,
    pageQuery,
    perPageQuery,
} from '../APIMethods/APIMethods.service';

export const getALlBannerService = () => {
    const URL = `/api/QuanLyPhim/LayDanhSachBanner`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('layDanhSachBannerService', rs.data.content));
    return response;
};

export const getAllFilmService = () => {
    let URL = `/api/QuanLyPhim/LayDanhSachPhim?${maNhomQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('layDanhSachPhimService', rs.data.content));
    return response;
};

export const getAllFilmByNameService = (tenPhim: string) => {
    const tenPhimQuery = `tenPhim=${tenPhim.trim()}`;
    let URL = `/api/QuanLyPhim/LayDanhSachPhim?${maNhomQuery}&${tenPhimQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('getAllFilmByNameService', rs.data.content));
    return response;
};

export const getAllFilmPaginationService = (page: number, perPage: number) => {
    const URL = `/api/QuanLyPhim/LayDanhSachPhimPhanTrang?${maNhomQuery}&${pageQuery(
        page
    )}&${perPageQuery(perPage)}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('getAllFilmPaginationService', rs.data.content));
    return response;
};

export const getAllFilmByNamePaginationService = (
    page: number,
    perPage: number,
    tenPhim: string
) => {
    const tenPhimQuery = `tenPhim=${tenPhim.trim()}`;
    const URL = `/api/QuanLyPhim/LayDanhSachPhimPhanTrang${maNhomQuery}?${tenPhimQuery}?${pageQuery(
        page
    )}?${perPageQuery(perPage)}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('getAllFilmByNamePaginationService', rs.data.content));
    return response;
};

export const getAllFilmByDateService = (tuNgay: string, denNgay: string) => {
    const tuNgayQuery = `tuNgay=${tuNgay}`;
    const denNgayQuery = `denNgay=${denNgay}`;
    const URL = `/api/QuanLyPhim/LayDanhSachPhimTheoNgay${maNhomQuery}&${tuNgayQuery}&${denNgayQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('getAllFilmByDateService', rs.data.content));
    return response;
};

export const getFilmDetailService = (maPhim: number) => {
    const maPhimQuery = `MaPhim=${maPhim}`;
    const URL = `/api/QuanLyPhim/LayThongTinPhim?${maPhimQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => console.log('getFilmDetailService', rs.data));
    return response;
};
