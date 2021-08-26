import { getAllFilmService, getFilmDetailService } from '../../services/quanLyPhim/film.service';
import * as filmTypes from './filmTypes';
import { IFilm } from '../../common/formatTypes/Film';

export const getAllFilmAction = () => {
    return (dispatch: any) => {
        const listFilmPromise = getAllFilmService();
        listFilmPromise.then((rs) => {
            const listFilmPayload: IFilm[] = rs.data.content;
            dispatch({
                type: filmTypes.GET_ALL_PHIM,
                payload: listFilmPayload,
            });
        });
    };
};

export const getFilmDetailAction = (maPhim: number) => {
    return (dispatch: any) => {
        const filmPromise = getFilmDetailService(maPhim);
        filmPromise.then((rs) => {
            const filmPayload: {} = {
                maPhim,
                film: rs.data.content,
            };
            dispatch({
                type: filmTypes.GET_FILM_EDIT,
                payload: filmPayload,
            });
        });
    };
};

export const resetFilmModalAction = () => {
    return {
        type: filmTypes.RESET_FILM_MODAL,
        payload: null,
    };
};
