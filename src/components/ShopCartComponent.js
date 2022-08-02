import React from 'react';

import { FaShoppingCart } from 'react-icons/fa';

import styles from './ShopCartComponent.module.css';

const ShopCartComponent = () => {
    return (
        <>
           <button className={ 'd-flex align-items-center ' + styles.btn}>
                <FaShoppingCart />
                <h3>Your Cart</h3>
                <button>0</button>
            </button> 
        </>
    );
}

export default ShopCartComponent;
