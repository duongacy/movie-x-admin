import {
    getAPIOnlyToken,
    maNhomQuery,
    perPageQuery,
    pageQuery,
    postAPIOnlyToken,
} from '../APIMethods/APIMethods.service';

export const getAllUserTypeService = () => {
    const URL = `/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => {
        console.log('layDanhSachLoaiNguoiDungService', rs.data.content);
    });
};
export const getAllUserServices = (tuKhoa: string = ``) => {
    const tuKhoaQuery = tuKhoa.trim() === `` ? `` : `&tuKhoa=${tuKhoa}`;
    const URL = `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?${maNhomQuery}${tuKhoaQuery}`;
    return getAPIOnlyToken(URL);
};

export const getAllUserPaginationService = (page: number, perPage: number) => {
    const URL = `/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?${maNhomQuery}&${pageQuery(
        page
    )}&${perPageQuery(perPage)}`;
    return getAPIOnlyToken(URL);
};

export const getUserByTuKhoa = (tuKhoa: string) => {
    const tuKhoaQuery = `&tuKhoa=${tuKhoa.trim()}`; //từ khóa chínhla taiKhoan
    const URL = `/api/QuanLyNguoiDung/TimKiemNguoiDung${maNhomQuery}${tuKhoaQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => {
        console.log('timKiemNguoiDungService', rs.data.content);
    });
};
export const getUserByTuKhoaPagination = (
    tuKhoa: string,
    page: number = 1,
    perPage: number = 10
) => {
    const tuKhoaQuery = `&tuKhoa=${tuKhoa.trim()}`; //từ khóa chính là taiKhoan
    const URL = `/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang${maNhomQuery}${tuKhoaQuery}${pageQuery(
        page
    )}${perPageQuery(perPage)}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => {
        console.log('timKiemNguoiDungPhanTrangService', rs.data.content);
    });
};

export const loginService = (payload: any) => {
    const URL = '/api/QuanLyNguoiDung/DangNhap';
    const response = postAPIOnlyToken(URL, payload);
    return response;
};
