import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { FETCH_ALL_BOOKS_REQUESTED } from '../actions/books/types';
 import { fetchAllBooksSucceeded, fetchAllBooksFailed } from '../actions/books/actions';

function* fetchBooks() {
    try {
        const books = yield call('http://127.0.0.1:8000/books/');
        console.log('books', books)
        yield put(fetchAllBooksSucceeded, books);

    } catch(e) {
        yield put(fetchAllBooksFailed);
    }
};

export function* booksSaga() {
    yield takeEvery(FETCH_ALL_BOOKS_REQUESTED, fetchBooks);
};