import axios from 'axios';
import { DOMAIN, TOKEN_CYBERSOFT, MA_NHOM } from '../../config';

export const maNhomQuery = `maNhom=${MA_NHOM}`; //Do mã nhóm này sử dụng chung cho tất cả nên được định nghĩa ở đây
export const pageQuery = (page: number) => `soTrang=${page}`; // dùng cho các page phân trang
export const perPageQuery = (perPage: number) => `soPhanTuTrenTrang=${perPage}`; // dùng cho các page phân trang

/* ----------------------------------- GET ---------------------------------- */
export const getAPIToken = (URL: string) => {
    return axios.get(`${DOMAIN + URL}`, {
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
        },
    });
};
/* -------------------------------------------------------------------------- */

/* ---------------------------------- POST ---------------------------------- */
export const postAPIToken = (URL: string, payload: any) => {
    return axios({
        url: `${DOMAIN + URL}`,
        method: 'POST',
        data: payload,
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
        },
    });
};

export const postAPITokenAuthor = (URL: string, payload: any) => {
    const { accessToken } =
        localStorage.getItem('userInfo') !== null
            ? JSON.parse(localStorage.getItem('userInfo')!)
            : null;
    return axios.post(`${DOMAIN}${URL}`, payload, {
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
            Authorization: `Bearer ${accessToken}`,
        },
    });
};
/* -------------------------------------------------------------------------- */

/* --------------------------------- DELETE --------------------------------- */

export const deleteAPITokenAuthor = (URL: string) => {
    const { accessToken } =
        localStorage.getItem('userInfo') !== null
            ? JSON.parse(localStorage.getItem('userInfo')!)
            : null;
    return axios.delete(`${DOMAIN}${URL}`, {
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
            Authorization: `Bearer ${accessToken}`,
        },
    });
};
/* -------------------------------------------------------------------------- */
