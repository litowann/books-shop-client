import { FETCH_ALL_BOOKS_REQUESTED, FETCH_ALL_BOOKS_SUCCEEDED, FETCH_ALL_BOOKS_FAILED } from '../actions/books/types';

const initialState = {
    books: [],
    isLoading: false
};

export const booksReducer = (state = initialState, actions) => {
    switch(actions.type){
        case FETCH_ALL_BOOKS_REQUESTED: 
            return {
                ...state,
                isLoading: true
            };
        case FETCH_ALL_BOOKS_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                books: actions.payload
            };
        case FETCH_ALL_BOOKS_FAILED:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    };
};