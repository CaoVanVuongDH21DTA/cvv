import React from 'react';
import './App.css';
import Header from "./component/Header";
import Main from "./component/Main";
import ProductDetail from './component/ProductDetail'; // Thêm component ProductDetail
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bottom from "./component/Bottom";
import Checkout from "./component/Checkout"; // Import Router

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/checkout" element={<Checkout/>}/>
                </Routes>
                <Bottom/>
            </div>
        </Router>
    );
}

export default App;
