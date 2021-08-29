import { IFilm, IFilmInput } from '../../common/formatTypes/Film';
import { IAction } from '../../type';

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
};

export const filmReducer = (state = initialState, action: IAction) => {
    const { type, payload } = action;
    switch (type) {
        case 'typeName':
            return { ...state, ...payload };

        default:
            return { ...state };
    }
};
