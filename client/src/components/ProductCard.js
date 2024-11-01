import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
    return (
        <div className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productPrice}>价格: ¥{product.price}</p>
            <Link to={`/product/${product.id}`} className={styles.productLink}>
                查看详情
            </Link>
        </div>
    );
};

export default ProductCard; 