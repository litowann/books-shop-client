import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allBooksSelector } from '../../selectors/booksSelectors';
import { fetchAllBooksRequested } from '../../actions/books/actions';

const App = () => {
    const allBooks = useSelector(state => allBooksSelector(state));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllBooksRequested);
    }, [dispatch]);

    return (
        <div>Hello</div>
    )
}

export default App;