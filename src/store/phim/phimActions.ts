import { layDanhSachPhimService } from '../../services/quanLyPhim/quanLyPhim.service';
import * as phimTypes from './phimTypes';

export const getAllPhimAction = () => {
    return (dispatch: any) => {
        const listPhimPromise = layDanhSachPhimService();
        listPhimPromise.then((rs) => {
            const listPhimPayload: phimTypes.IPhim = rs.data.content;
            dispatch({
                type: phimTypes.GET_ALL_PHIM,
                payload: listPhimPayload,
            });
        });
    };
};
