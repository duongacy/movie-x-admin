import { IFilm, IFilmInput } from '../../common/formatTypes/Film';
import { IAction } from '../../type';
import { mapKeyToData } from '../../utils/mapKeyToData';
import { FETCH_FILM_LIST } from './filmTypes';

export interface IFilmTable extends IFilm {
    key: string;
}

const filmInputFieldsDefault: IFilmInput = {
    tenPhim: '',
    biDanh: '',
    trailer: '',
    moTa: '',
    maNhom: '',
    ngayKhoiChieu: '',
    sapChieu: false,
    dangChieu: false,
    hot: false,
    danhGia: 1,
    hinhAnh: undefined,
};
const initialState = {
    listFilmTable: <IFilmTable[]>[],
    filmInputFields: <IFilmInput>filmInputFieldsDefault,
    totalCount: 0,// chỉ định số record trả về
};

export const filmReducer = (state = initialState, action: IAction) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_FILM_LIST:
            state.listFilmTable = mapKeyToData(payload.items, 'film-record');
            state.totalCount = payload.totalCount;
            return { ...state };

        default:
            return { ...state };
    }
};
