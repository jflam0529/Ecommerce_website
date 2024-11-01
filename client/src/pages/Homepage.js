import React from 'react';
import { useOutletContext } from 'react-router-dom';
import ProductList from './ProductList';
import styles from './Homepage.module.css';

const Homepage = () => {
    const { searchQuery } = useOutletContext();

    return (
        <div className={styles.homepage}>
            <h1 className={styles.title}>Welcome to Our E-Commerce Store</h1>
            <ProductList searchQuery={searchQuery} />
        </div>
    );
};

export default Homepage; 