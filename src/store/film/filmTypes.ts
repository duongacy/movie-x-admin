import { IFilm } from '../../common/formatTypes/Film';

export const GET_ALL_PHIM = 'GET_ALL_PHIM';
export const GET_FILM_EDIT = 'GET_FILM_EDIT';
export const RESET_FILM_MODAL = 'RESET_FILM_MODAL';

export interface IFilmState {
    listFilm: IFilm[];
    filmDetail: IFilm | null;
}
