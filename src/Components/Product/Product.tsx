import React, {useState} from 'react';
import {IProduct} from "../../models";


interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) => {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400 '
    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return (
        <div className="border px-2 py-4 rounded flex flex-col items-center mb-2">
            <h1>{ product.title }</h1>
            <img className="w-1/6 mb-5" src={ product.image } alt="title"/>
            <p className="font-bold">{product.price}</p>
            <button className={btnClasses.join(' ')} onClick={() => setDetails(prevState => !prevState)}>
                { details ? 'Hide details' : 'Show details' }
            </button>
            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{ fontWeight: "bold" }}>{product?.rating?.rate}</span></p>
            </div>}
        </div>
    );
};

export default Product;