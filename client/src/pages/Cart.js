import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import styles from './Cart.module.css';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className={styles.cart}>
            <h1>购物车</h1>
            {cart.length === 0 ? (
                <p>您的购物车是空的。</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id} className={styles.cartItem}>
                            <CartItem item={item} onRemove={removeFromCart} />
                        </div>
                    ))}
                    <h2 className={styles.totalPrice}>总价: ¥{calculateTotalPrice()}</h2>
                </div>
            )}
        </div>
    );
};

export default Cart; 