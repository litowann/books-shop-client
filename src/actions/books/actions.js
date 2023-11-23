import { createAction } from '@reduxjs/toolkit';
import {
    FETCH_ALL_BOOKS_REQUESTED,
    FETCH_ALL_BOOKS_SUCCEEDED,
    FETCH_ALL_BOOKS_FAILED
 } from './types';

export const fetchAllBooksRequested = createAction(FETCH_ALL_BOOKS_REQUESTED);
export const fetchAllBooksSucceeded = createAction(FETCH_ALL_BOOKS_SUCCEEDED);
export const fetchAllBooksFailed = createAction(FETCH_ALL_BOOKS_FAILED);