import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../api/productApi';
import styles from './ProductList.module.css';

const ProductList = ({ searchQuery }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        loadProducts();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            setFilteredProducts(products.filter(product => 
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ));
        } else {
            setFilteredProducts(products);
        }
    }, [searchQuery, products]);

    return (
        <div className={styles.productList}>
            {filteredProducts.map(product => (
                <div key={product.id} className={styles.productCard}>
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    );
};

export default ProductList; 