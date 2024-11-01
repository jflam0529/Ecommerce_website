import React, { createContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingProductIndex = state.findIndex(item => item.id === action.product.id);
            if (existingProductIndex !== -1) {
                const updatedCart = [...state];
                updatedCart[existingProductIndex].quantity += action.product.quantity;
                return updatedCart;
            }
            return [...state, action.product];
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.id);
        case 'DECREASE_QUANTITY':
            return state.map(item =>
                item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
            );
        default:
            return state;
    }
};

const CartProvider = ({ children }) => {
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart, dispatch] = useReducer(cartReducer, initialCart);

    const addToCart = product => {
        dispatch({ type: 'ADD_TO_CART', product });
    };

    const removeFromCart = id => {
        dispatch({ type: 'REMOVE_FROM_CART', id });
    };

    const decreaseQuantity = id => {
        dispatch({ type: 'DECREASE_QUANTITY', id });
    };

    useEffect(() => {
        console.log("Current cart in CartProvider:", cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider }; 