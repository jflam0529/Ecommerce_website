import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../api/productApi';
import { CartContext } from '../context/CartContext';
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        const loadProduct = async () => {
            const data = await fetchProductById(id);
            setProduct(data);
        };
        loadProduct();
    }, [id]);

    const handleAddToCart = () => {
        addToCart(product);
        navigate('/cart');
    };

    if (!product) return <div>加载中...</div>;

    return (
        <div className={styles.productDetail}>
            <img src={product.image} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>价格: ¥{product.price}</p>
            <button onClick={handleAddToCart}>加入购物车</button>
        </div>
    );
};

export default ProductDetail;