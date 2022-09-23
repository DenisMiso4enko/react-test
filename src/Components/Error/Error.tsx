import React from 'react';

interface ErrorMessageProps {
    error: string
}

const Error = ({ error }: ErrorMessageProps) => {
    return (
        <p className="text-center text-red-500 font-bold">{ error }</p>
    );
};

export default Error;