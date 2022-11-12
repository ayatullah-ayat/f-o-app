
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({onModalShow}) => {

    const cartItem = useContext(CartContext);
    console.log('HeaderCartButton', cartItem);

    return(
        <button onClick={onModalShow} className={classes.button}>
            <span>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={ classes.badge }>{ cartItem.totalAmount }</span>
        </button>
    )
}

export default HeaderCartButton;