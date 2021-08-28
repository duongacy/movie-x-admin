import { getAllUserServices, getAllUserPaginationService } from '../../services/user/user.service';
import { IAction } from '../../type';
import { GET_USER_LIST, SET_LIST_USER_LOADING } from './userTypes';

export const getAllUserAction = () => {
    return (dispatch: any) => {
        const listUserPromise = getAllUserServices();
        listUserPromise.then((rs) => {
            const action: IAction = {
                type: GET_USER_LIST,
                payload: rs.data.content,
            };
            dispatch(action);
        });
    };
};

const setUserLoadingAction = (isLoading: boolean) => {
    return {
        type: SET_LIST_USER_LOADING,
        payload: isLoading,
    };
};

export const getAllUserPaginationAction = (page: number, pageSize: number) => {
    return (dispatch: any) => {
        const listUserPromise = getAllUserPaginationService(page, pageSize);
        dispatch(setUserLoadingAction(true));
        listUserPromise.then((rs) => {
            const { content } = rs.data;
            const action: IAction = {
                type: GET_USER_LIST,
                payload: content,
            };
            dispatch(action);
            dispatch(setUserLoadingAction(false));
        });
    };
};
