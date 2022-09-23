import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import ProductsPage from "./Psges/ProductsPage";
import AboutPage from "./Psges/AboutPage";
import Navigation from "./Components/Navigation/Navigation";



function App() {
    return(
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={ <ProductsPage/> }/>
                <Route path="/about" element={ <AboutPage/> }/>
            </Routes>
        </>

    )
}

export default App;
