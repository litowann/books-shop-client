import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_ALL_BOOKS_REQUESTED } from '../actions/books/types';
import { fetchAllBooksSucceeded, fetchAllBooksFailed } from '../actions/books/actions';
import { getAllBooks } from '../servcies/api';
import { BASE_API_URL } from '../servcies/constants';

function* fetchBooks() {
    try {
        const apiPayload = {
            'method': 'get',
            'url': `${BASE_API_URL}/books/`
        }
        const books = yield call(getAllBooks, apiPayload);
        yield put(fetchAllBooksSucceeded, books);

    } catch(e) {
        yield put(fetchAllBooksFailed);
    }
};

export function* booksSaga() {
    yield takeEvery(FETCH_ALL_BOOKS_REQUESTED, fetchBooks);
};