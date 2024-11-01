import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import HeaderLayout from './pages/HeaderLayout';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HeaderLayout />}>
                        <Route index element={<Homepage />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />                    
                    </Route>
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;