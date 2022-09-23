import React, {useState} from 'react';
import {useProducts} from "../Components/hooks/products";
import {IProduct} from "../models";
import Loader from "../Components/Loader/Loader";
import Error from "../Components/Error/Error";
import Product from "../Components/Product/Product";
import Modal from "../Components/Modal/Modal";
import CreateProduct from "../Components/CreateProduct/CreateProduct";

const ProductsPage = () => {
    const [count, setCount] = useState(0)
    const { loading, error, products, addProduct } = useProducts()
    const [ modal, setModal ] = useState(false)

    const createHendler = (product: IProduct) => {
        setModal(false)
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            <h1 className="text-4xl mb-3">Hello from react {count}</h1>
            <button className="px-4 py-2 border border-amber-400 mb-5" onClick={() => setCount(count + 1)}>Set Count</button>

            <button className="fixed bottom-5 right-5 rounded-full bg-red-600 text-2xl px-4 py-2" onClick={() => setModal(true)}>
                +
            </button>

            { loading &&  <Loader/> }
            { error &&  <Error error={error}/> }

            { products.map(product => <Product key={product.id} product={ product }/>) }
            {/*<Product product={ products[0] }/>*/}
            {/*<Product product={ products[1] }/>*/}
            { modal && <Modal onClose={() => setModal(false)} title="Create new Product">
                <CreateProduct onCreate={createHendler}/>
            </Modal>}
        </div>
    );
};

export default ProductsPage;