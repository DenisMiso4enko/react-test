import React from 'react';
import {useProducts} from "../hooks/products";

const Error = () => {
    const { error} = useProducts()
    return (
        <p className="text-center text-red-500 font-bold">{ error }</p>
    );
};

export default Error;