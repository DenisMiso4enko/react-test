import React, {useState} from 'react';
import './App.css';
import Product from "./Components/Product/Product";
import {useProducts} from "./Components/hooks/products";
import Loader from "./Components/Loader/Loader";
import Error from "./Components/Error/Error";


function App() {
    const [count, setCount] = useState(0)
    const { loading, error, products } = useProducts()


  return (
    <div className="container mx-auto max-w-2xl pt-5">
     <h1 className="text-4xl mb-3">Hello from react {count}</h1>
        <button className="px-4 py-2 border border-amber-400 mb-5" onClick={() => setCount(count + 1)}>Set Count</button>

        { loading &&  <Loader/> }
        { error &&  <Error/> }

        { products.map(product => <Product key={product.id} product={ product }/>) }
        {/*<Product product={ products[0] }/>*/}
        {/*<Product product={ products[1] }/>*/}
    </div>
  );
}

export default App;
