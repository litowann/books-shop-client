import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

const App = () => {
    const [data, setData] = useState({});


    useEffect(() => {
        fetch('http://127.0.0.1:8000/books/').then(response => response.json()).then(data => setData(data));
    }, []);

    if (isEmpty(data)) return <span>Loading...</span>

    return (
        <div>
            <ul>
                {data?.map(book => (
                    <li key={book.year + book.pages}>
                        <p>{book.name}</p>
                        <p>{book.author}</p>
                        <p>{book.pages}</p>
                        <p>{book.year}</p>
                    </li>
                ))}
            </ul></div>
    )
}

export default App;