import React, {useState} from 'react';
import {IProduct} from "../../models";
import axios from "axios";
import {products} from "../Data/Products";
import Error from "../Error/Error";
import product from "../Product/Product";

const productData: IProduct = {
    title: '',
    price: 13.3,
    description: 'cool staff ',
    category: 'lorem',
    image: 'https://i.pravatar.cc',
    rating: {
        rate: 42,
        count: 45.
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

const CreateProduct = ({ onCreate }: CreateProductProps) => {
    const [value, setValue] = useState('')
    const [error, setError ] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }

        { error && <Error error={error}/> }

        productData.title = value
        const responce =  await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(responce.data)
    }


    // const changeHandel = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //     setValue(event.target.value)
    // }
    

    return (
        <form onSubmit={submitHandler}>
            <input type="text" className="border py-2 px-4 mb-2 w-full outline-0"
                   value={value} onChange={e => setValue(e.target.value)} placeholder="Enter product title..."/>
            <button type="submit" className="px-4 py-2 border border-amber-400 mb-5 bg-yellow-400 hover:text-white">Create</button>
        </form>
    );
};

export default CreateProduct;