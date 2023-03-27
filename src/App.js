import React, { useState, useEffect } from 'react';
import { Spinner } from './Components/Spinner';
import { Layout } from './Layout/Layout';

export const App = () => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/data.json')
            .then(response => response.json())
            .then(data => { 
                setData(data);
                setLoading(false); 
            });
    }, []);

    if(loading) {
        return (
            <Spinner/>
        );
    }

    return (
        <Layout
            data={data}
        />
    );
}


