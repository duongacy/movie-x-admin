import {
    getAPIOnlyToken,
    maNhomQuery,
    perPageQuery,
    pageQuery,
    postAPIOnlyToken,
} from '../APIMethods/APIMethods.service';

export const layDanhSachLoaiNguoiDungService = () => {
    const URL = `/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => {
        console.log('layDanhSachLoaiNguoiDungService', rs.data.content);
    });
};
export const layDanhSachNguoiDungService = (tuKhoa: string = ``) => {
    const tuKhoaQuery = tuKhoa.trim() === `` ? `` : `&tuKhoa=${tuKhoa}`; //từ khóa chính là họ tên
    const URL = `/api/QuanLyNguoiDung/LayDanhSachNguoiDung${maNhomQuery}${tuKhoaQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => {
        console.log('layDanhSachNguoiDungService', rs.data.content);
    });
};

export const layDanhSachNguoiDungPhanTrangService = (
    tuKhoa: string = ``,
    page: number = 1,
    perPage: number = 10
) => {
    const tuKhoaQuery = tuKhoa.trim() === `` ? `` : `&tuKhoa=${tuKhoa}`; //từ khóa chính là taiKhoan
    const URL = `/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang${maNhomQuery}${tuKhoaQuery}${pageQuery(
        page
    )}${perPageQuery(perPage)}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => {
        console.log('layDanhSachNguoiDungPhanTrangService', rs.data.content);
    });
};

export const timKiemNguoiDungService = (tuKhoa: string) => {
    const tuKhoaQuery = `&tuKhoa=${tuKhoa.trim()}`; //từ khóa chínhla taiKhoan
    const URL = `/api/QuanLyNguoiDung/TimKiemNguoiDung${maNhomQuery}${tuKhoaQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => {
        console.log('timKiemNguoiDungService', rs.data.content);
    });
};
export const timKiemNguoiDungPhanTrangService = (
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
    response.then((rs) => {
        console.log('rrrr:', rs.data);
    });
    return response;
};
