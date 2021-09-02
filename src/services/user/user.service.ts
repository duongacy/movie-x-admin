import { IUser, IUserInput } from '../../common/formatTypes/User';
import {
    getAPIOnlyToken,
    maNhomQuery,
    perPageQuery,
    pageQuery,
    postAPIToken,
    postAPITokenAuthor,
    deleteAPITokenAuthor,
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
    const tuKhoaQuery = `tuKhoa=${tuKhoa.trim()}`; //từ khóa chínhla taiKhoan
    const URL = `/api/QuanLyNguoiDung/TimKiemNguoiDung?${maNhomQuery}&${tuKhoaQuery}`;
    return getAPIOnlyToken(URL);
};
export const getUserByNamePaginationService = (
    tuKhoa: string,
    page: number = 1,
    perPage: number = 10
) => {
    const tuKhoaQuery = tuKhoa === `` ? `` : `&tuKhoa=${tuKhoa.trim()}`; //từ khóa chính là taiKhoan
    const URL = `/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?${maNhomQuery}${tuKhoaQuery}&${pageQuery(
        page
    )}&${perPageQuery(perPage)}`;
    return getAPIOnlyToken(URL);
};

export const addUserService = (payload: IUserInput) => {
    const URL = '/api/QuanLyNguoiDung/ThemNguoiDung';
    return postAPITokenAuthor(URL, payload);
};

export const updateUserService = (payload: IUserInput) => {
    const URL = '/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung';
    return postAPITokenAuthor(URL, payload);
};

export const deleteUserServices = (payload: string) => {
    const taiKhoanQuery = `TaiKhoan=${payload}`;
    const URL = `/api/QuanLyNguoiDung/XoaNguoiDung?${taiKhoanQuery}`;

    return deleteAPITokenAuthor(URL);
};

export const loginService = (payload: any) => {
    const URL = '/api/QuanLyNguoiDung/DangNhap';
    const response = postAPIToken(URL, payload);
    return response;
};
