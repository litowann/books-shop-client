import { all } from 'redux-saga/effects'
import { booksSaga } from './booksSaga';

export function* rootSaga() {
    yield all([
        booksSaga()
    ]);
};