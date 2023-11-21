import React, { useEffect, useState } from 'react';

const App = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = () => {
            fetch("http://127.0.0.1:5000/books", {
                method: 'GET',
                withCredentials: true,
                crossorigin: true,
                mode: 'no-cors',
            })
            .then(response => response.json())
            .then(data => setData(data))
        };

        fetchData();
    }, []);

    return (
        <div>App is ready</div>
    )
}

export default App;