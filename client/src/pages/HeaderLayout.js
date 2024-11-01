import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './HeaderLayout.module.css';

const HeaderLayout = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleLogoClick = () => {
        navigate('/');
    };

    const handleCartClick = () => {
        navigate('/cart');
    };

    const handleSearch = () => {
        setSearchQuery(inputValue);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <header className={styles.header}>
                <button onClick={handleLogoClick} className={styles.logoButton}>
                    <img src="/logo.png" alt="E-Commerce Logo" className={styles.logo} />
                </button>
                <div className={styles.searchBar}>
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        className={styles.input} 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleSearch} className={styles.searchButton}>搜索</button>
                </div>
                <nav className={styles.navLinks}>
                    <button onClick={handleCartClick} className={styles.cartButton}>
                        <img src="/images/cart.png" alt="Cart" className={styles.cartIcon} />
                    </button>
                </nav>
            </header>
            <main>
                <Outlet context={{ searchQuery }} />
            </main>
        </div>
    );
};

export default HeaderLayout;