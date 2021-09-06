import { message } from 'antd';
import {
    getAllFilmByNamePaginationService,
    addFilmService,
    deleteFilmService,
    updateFilmService,
} from '../../services/film/film.service';
import { IAction } from '../../type';
import { setLoadingAction } from '../parent/parentAction';
import { DELETE_FILM, FETCH_FILM_LIST } from './filmTypes';

export const getAllFilmByNameAction = (filmName: string, page: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(setLoadingAction(true));
        const listFilmPromise = getAllFilmByNamePaginationService(filmName, page, pageSize);
        listFilmPromise.then((rs) => {
            const { items, totalCount } = rs.data.content;
            const action: IAction = {
                type: FETCH_FILM_LIST,
                payload: { items, totalCount },
            };
            dispatch(action);
            dispatch(setLoadingAction(false));
        });
    };
};

export const addFilmAction = (film: FormData, reloadFilm: () => void) => {
    return (dispatch: any) => {
        const promise = addFilmService(film);
        promise
            .then((rs) => {
                message.success('Them phim thanh cong');
                reloadFilm();
            })
            .catch((err) => {
                message.error(err.response.data.content);
            });
    };
};

export const updateFilmAction = (film: FormData, reloadFilm: () => void) => {
    return (dispatch: any) => {
        const promise = updateFilmService(film);
        promise
            .then((rs) => {
                reloadFilm();
                message.success('chinh sua thanh cong');
            })

            .catch((err) => {
                message.error(err.response.data.content);
            });
    };
};

export const deleteFilmAction = (maPhim: number, reloadFilm: () => void) => {
    return (dispatch: any) => {
        const promise = deleteFilmService(maPhim);
        promise
            .then((rs) => {
                const action: IAction = {
                    payload: maPhim,
                    type: DELETE_FILM,
                };
                dispatch(action);
                message.error('Xoa thanh cong');
                reloadFilm();
            })
            .catch((err) => {
                message.error('Xoa that bai');
            });
    };
};
