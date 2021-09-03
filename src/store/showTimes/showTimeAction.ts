import { IShowTimeInput } from 'common/formatTypes/showTime';
import {
    getAllCineplexService,
    getAllTheatreByCineplexService,
} from 'services/cineplex/cineplex.service';
import { getFilmByIdService } from 'services/film/film.service';
import { addShowtimeService } from 'services/showTime/showTime.services';
import { IAction } from 'type';
import { FETCH_CINEPLEX_LIST, FETCH_FILM_DETAIL, FETCH_THEATRE_LIST } from './showTimeTypes';

export const getFilmByIdAction = (maPhim: number) => {
    const filmPromise = getFilmByIdService(maPhim);
    return (dispatch: any) => {
        filmPromise.then((rs) => {
            console.log('phim theo id:', rs);
            const action: IAction = { type: FETCH_FILM_DETAIL, payload: rs.data.content };
            dispatch(action);
        });
    };
};

export const getAllCineplexAction = (maHeThongRap: string) => {
    const cineplexPromise = getAllCineplexService(maHeThongRap);
    return (dispatch: any) => {
        cineplexPromise.then((rs) => {
            console.log('cineplex list:', rs.data.content);
            const action: IAction = {
                type: FETCH_CINEPLEX_LIST,
                payload: rs.data.content,
            };
            dispatch(action);
        });
    };
};

export const getAllTheatreByCineplexAction = (maHeThongRap: string) => {
    const cineplexPromise = getAllTheatreByCineplexService(maHeThongRap);
    return (dispatch: any) => {
        cineplexPromise.then((rs) => {
            const action: IAction = {
                type: FETCH_THEATRE_LIST,
                payload: rs.data.content,
            };
            dispatch(action);
        });
    };
};

export const addShowtimeAction = (showTime: IShowTimeInput) => {
    const promiseAdd = addShowtimeService(showTime);
    return (dispatch: any) => {
        promiseAdd
            .then((rs) => {
                console.log('them showtimes thanh cong:', rs);
            })
            .catch((err) => {
                console.log('error them showtime:', err.response);
            });
    };
};
