import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import styles from './CartItem.module.css';

const CartItem = ({ item, onRemove }) => {
    const navigate = useNavigate();
    const { addToCart, decreaseQuantity } = useContext(CartContext);
    const [quantity, setQuantity] = useState(item.quantity);

    const handleImageClick = () => {
        navigate(`/product/${item.id}`);
    };

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        addToCart({ ...item, quantity: 1 });
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
            decreaseQuantity(item.id);
        }
    };

    return (
        <div className={styles.cartItem}>
            <img 
                src={item.image} 
                alt={item.name} 
                className={styles.image} 
                onClick={handleImageClick}
                style={{ cursor: 'pointer' }}
            />
            <h3 className={styles.name}>{item.name}</h3>
            <p className={styles.price}>价格: ¥{item.price}</p>
            <div className={styles.quantityControl}>
                <button onClick={handleDecrease} disabled={quantity <= 1} className={styles.decreaseButton}>-</button>
                <input type="text" value={quantity} readOnly className={styles.quantityInput} />
                <button onClick={handleIncrease} className={styles.increaseButton}>+</button>
            </div>
            <button onClick={() => onRemove(item.id)} className={styles.removeButton}>移除</button>
        </div>
    );
};

export default CartItem; 