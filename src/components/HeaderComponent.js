

import React from 'react';
import ShopCartComponent from './ShopCartComponent';


import styles from './HeaderComponent.module.css';


const HeaderComponent = () => {
    return (
        <div className={styles['main-header']}>
            <div className={ styles.container }>
                <div className='d-flex justify-content-between'>
                    <h3>React Food</h3>
                    <ShopCartComponent />
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;
