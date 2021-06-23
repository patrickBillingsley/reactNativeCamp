import * as ActionTypes from './ActionTypes';

export const partners = (state = {  isLoading: false,
                                    errMess: null,
                                    partners: [] 
                                }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PARTNERS:
            return { isLoading: false, errMess: null, partners: action.payload }
        
        case ActionTypes.PARTNERS_LOADING:
            return { isLoading: true, errMess: null, partners: [] };

        case ActionTypes.PARTNERS_FAILED:
            return { isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};