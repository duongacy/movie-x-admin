import { IAction } from '../../type';
import {
    IMultiplex,
    GET_ALL_MULTIPLEX_BY_FILM,
    GET_ALL_THEATRE_GROUP_BY_MULTIPLEX,
    ITheatre,
    GET_SHOW_TIMES,
} from './theatreTypes';

interface ITheatreState {
    listMultiplexByFilm: IMultiplex[]; //đây chính là thứ cần query
    listTheatre: ITheatre[];
    showTimes: any[];
}

const initialState: ITheatreState = {
    listMultiplexByFilm: [],
    listTheatre: [],
    showTimes: [],
};

export const theatreReducer = (state: ITheatreState = initialState, action: IAction) => {
    switch (action.type) {
        case GET_ALL_MULTIPLEX_BY_FILM:
            console.log('ahahahha', action.payload);
            state.listMultiplexByFilm = action.payload;
            return { ...state };

        case GET_ALL_THEATRE_GROUP_BY_MULTIPLEX:
            // console.log('ahahahha', action.payload);
            // state.listMultiplexByFilm = action.payload;
            state.listTheatre = action.payload;
            console.log('state.listTheatre: ', state.listTheatre);
            return { ...state };

        case GET_SHOW_TIMES:
            // console.log(action.payload);
            // const multiplex = state.listMultiplexByFilm.filter(
            //     (item) => item.maHeThongRap === action.payload.multiplexId
            // );
            // // console.log("multiplex: ", multiplex[0].);
            // let st:any = [];
            // for (let item of multiplex) {
            //     console.log('item', item);
            //     let itemFilter= item.cumRapChieu?.filter(rap=>rap.maCumRap === action.payload.theatreId)
            //     st=[ ...itemFilter]
            // }

            return { ...state };

        default:
            return state;
    }
};
