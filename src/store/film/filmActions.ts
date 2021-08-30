import {
    getAllFilmByNamePaginationService,
    getAllFilmByDatePaginationService,
} from '../../services/film/film.service';
import { IAction } from '../../type';
import { setLoadingAction } from '../parent/parentAction';
import { FETCH_FILM_LIST } from './filmTypes';

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
