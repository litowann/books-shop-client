import React, { useEffect, useState } from 'react';

const App = () => {
    const [data, setData] = useState({});


    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/books').then(response => response.json()).then(data => setData(data));
    }, []);

    return (
        <div>
            <ul>
                {data?.books?.map(book => (
                    <li key={book}>
                        {book}
                    </li>
                ))}
            </ul></div>
    )
}

export default App;