import { getAPIToken } from 'services/APIMethods/APIMethods.service';

const maHeThongRapQuery = (maHeThongRap: string) =>
    maHeThongRap === `` ? `` : `?maHeThongRap=${maHeThongRap}`;

/* ------- hệ thống rạp chiếu(đặt tên vậy thôi chứ k biết đúng sai) ------ */
export const getAllCineplexService = (maHeThongRap: string) => {
    const URL = `/api/QuanLyRap/LayThongTinHeThongRap${maHeThongRapQuery(maHeThongRap)}`;
    return getAPIToken(URL);
};

/* ------------------------------ cụm rạp chiếu ----------------------------- */
export const getAllTheatreByCineplexService = (maHeThongRap: string) => {
    const URL = `/api/QuanLyRap/LayThongTinCumRapTheoHeThong${maHeThongRapQuery(maHeThongRap)}`;
    return getAPIToken(URL);
};
