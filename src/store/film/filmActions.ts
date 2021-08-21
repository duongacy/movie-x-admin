import { getAllFilmService } from '../../services/quanLyPhim/quanLyPhim.service';
import * as filmTypes from './filmTypes';

export const getAllFilmAction = () => {
    return (dispatch: any) => {
        const listFilmPromise = getAllFilmService();
        listFilmPromise.then((rs) => {
            const listFilmPayload: filmTypes.IPhim = rs.data.content;
            dispatch({
                type: filmTypes.GET_ALL_PHIM,
                payload: listFilmPayload,
            });
        });
    };
};
