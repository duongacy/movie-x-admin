import { IShowTimeInput } from 'common/formatTypes/showTime';
import { postAPITokenAuthor } from 'services/APIMethods/APIMethods.service';

export const addShowtimeService = (showTime: IShowTimeInput) => {
    const URL = `/api/QuanLyDatVe/TaoLichChieu`;
    return postAPITokenAuthor(URL, showTime);
};
