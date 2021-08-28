import { IAction } from '../../type';
import { SET_LOADING } from './parentTypes';

export const setLoadingAction = (isLoading: boolean) => {
    return (dispatch: any) => {
        const action: IAction = {
            type: SET_LOADING,
            payload: isLoading,
        };
        dispatch(action);
    };
};
