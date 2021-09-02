import { IPushModalStatus } from '../../contexts/ManagementContext';
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

export const addFilmAction = (
    film: FormData,
    pushModalStatus: IPushModalStatus,
    reloadFilm: () => void
) => {
    return (dispatch: any) => {
        const promise = addFilmService(film);
        promise
            .then((rs) => {
                pushModalStatus('SUCCESS', 'Them moi thanh cong');
                reloadFilm();
            })
            .catch((err) => {
                console.log(err.response);

                pushModalStatus('FAIL', 'Them moi that bai');
            });
    };
};

export const updateFilmAction = (
    film: FormData,
    pushModalStatus: IPushModalStatus,
    reloadFilm: () => void
) => {
    return (dispatch: any) => {
        const promise = updateFilmService(film);
        promise
            .then((rs) => {
                pushModalStatus('SUCCESS', 'Update thanh cong');
                reloadFilm();
            })

            .catch((err) => {
                console.log(err.response.data.content);
                pushModalStatus('FAIL', err.response.data.content);
            });
    };
};

export const deleteFilmAction = (maPhim: number, reloadFilm: () => void) => {
    return (dispatch: any) => {
        const promise = deleteFilmService(maPhim);
        promise.then((rs) => {
            const action: IAction = {
                payload: maPhim,
                type: DELETE_FILM,
            };
            dispatch(action);
            reloadFilm();
        });
    };
};
