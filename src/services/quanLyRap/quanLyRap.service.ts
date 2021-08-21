import { getAPIOnlyToken } from '../APIMethods/APIMethods.service';

export const layThongTinHeThongRapService = (maHeThongRap: string = ``) => {
    const maHeThongRapQuery = maHeThongRap.trim() === `` ? `` : `?maHeThongRap=${maHeThongRap}`;
    const URL = `/api/QuanLyRap/LayThongTinHeThongRap${maHeThongRapQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => {
        console.log('layThongTinHeThongRapService:', rs.data.content);
    });
};

// export const layThongTinCumRapTheoHeThongService = (maHeThongRap: string = ``) => {
//     const maHeThongRapQuery = maHeThongRap.trim() === `` ? `` : `?maHeThongRap=${maHeThongRap}`;
//     const URL = `/api/QuanLyRap/LayThongTinCumRapTheoHeThong${maHeThongRapQuery}`;

//     const response = getAPIOnlyToken(URL);
//     response.then((rs) => {
//         console.log('layThongTinCumRapTheoHeThongService: ', rs.data.content);
//     });
// };
export const getTheatreByMultiplex = (maHeThongRap: string) => {
    const maHeThongRapQuery = `maHeThongRap=${maHeThongRap}`;
    const URL = `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?${maHeThongRapQuery}`;

    const response = getAPIOnlyToken(URL);
    response.then((rs) => {
        console.log('layThongTinCumRapTheoHeThongService: ', rs.data.content);
    });
    return response;
};

export const layThongTinLichChieuHeThongRapService = (maHeThongRap: string = ``) => {
    const maHeThongRapQuery = maHeThongRap.trim() === `` ? `` : `?maHeThongRap=${maHeThongRap}`;
    const URL = `/api/QuanLyRap/LayThongTinLichChieuHeThongRap${maHeThongRapQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => {
        console.log('layThongTinLichChieuHeThongRapService:', rs.data.content);
    });
};

export const getAllMultiplexByFilmService = (maPhim: number) => {
    const maPhimQuery = `?MaPhim=${maPhim}`;
    const URL = `/api/QuanLyRap/LayThongTinLichChieuPhim${maPhimQuery}`;
    const response = getAPIOnlyToken(URL);
    response.then((rs) => {
        console.log('layThongTinLichChieuPhimService', rs.data.content);
    });
    return response;
};
