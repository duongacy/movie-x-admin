import {
    getAllMultiplexByFilmService,
    getTheatreByMultiplex,
} from '../../services/quanLyRap/quanLyRap.service';
import { IAction } from '../../type';
import {
    GET_ALL_MULTIPLEX_BY_FILM,
    GET_ALL_THEATRE_GROUP_BY_MULTIPLEX,
    GET_SHOW_TIMES,
    IMultiplex,
    ITheatre,
} from './theatreTypes';

export const getAllMultiplexByFilmAction = (filmId: number) => {
    return (dispatch: any) => {
        const theatrePromise = getAllMultiplexByFilmService(filmId);
        theatrePromise.then((rs) => {
            const payload: IMultiplex[] = rs.data.content.heThongRapChieu;

            dispatch({
                type: GET_ALL_MULTIPLEX_BY_FILM,
                payload: payload,
            });
        });
    };
};

export const getAllTheatreByMultiplexAction = (multiplexId: string) => {
    return (dispatch: any) => {
        console.log('getAllTheatreByMultiplexAction');
        const theatrePromise = getTheatreByMultiplex(multiplexId);
        theatrePromise.then((rs) => {
            const payload: ITheatre[] = rs.data.content;
            console.log('payload yyyy:', payload);

            dispatch({
                type: GET_ALL_THEATRE_GROUP_BY_MULTIPLEX,
                payload: payload,
            });
        });
    };
};

export const getShowTimeAction = (multiplexId: any, theatreId: any) => {
    return (dispatch: any) => {
        const action: IAction = {
            type: GET_SHOW_TIMES,
            payload: {
                multiplexId,
                theatreId,
            },
        };
        dispatch(action);
    };
};
