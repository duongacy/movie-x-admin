import axios from 'axios';
import { DOMAIN, TOKEN_CYBERSOFT } from '../../config';

export const layThongTinHeThongRapService = (maHeThongRap: string) => {
    const response = axios.get(
        `${DOMAIN}/api/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${maHeThongRap}`,
        {
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT,
            },
        }
    );
    response.then((rs) => {
        console.log('layThongTinHeThongRapService:', rs.data.content);
    });
};

export const layThongTinCumRapTheoHeThongService = (maHeThongRap: string) => {
    const response = axios.get(
        `${DOMAIN}/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
        {
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT,
            },
        }
    );
    response.then((rs) => {
        console.log('layThongTinCumRapTheoHeThongService: ', rs.data.content);
    });
};

export const layThongTinLichChieuHeThongRapService = (maHeThongRap: string) => {
    const response = axios.get(
        `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}`,
        {
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT,
            },
        }
    );
    response.then((rs) => {
        console.log('layThongTinLichChieuHeThongRapService:', rs.data.content);
    });
};

export const layThongTinLichChieuPhimService = (maPhim: number) => {
    const response = axios.get(
        `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        {
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT,
            },
        }
    );
    response.then((rs) => {
        console.log('layThongTinLichChieuPhimService', rs.data.content);
    });
};
