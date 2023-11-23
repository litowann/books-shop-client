import { createSelector } from 'reselect';

export const allBooksSelector = createSelector((state => state?.books));