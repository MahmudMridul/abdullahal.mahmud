import React, { useState, useEffect } from 'react';
import { Spinner } from './Components/Spinner';
import { Layout } from './Layout/Layout';

export const App = () => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const dataUrl = `${process.env.PUBLIC_URL}/data/data.json`;

    useEffect(() => {
        fetch(dataUrl)
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


