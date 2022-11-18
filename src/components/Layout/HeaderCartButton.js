
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({onModalShow}) => {

    const ctx = useContext(CartContext);

    return(
        <button onClick={onModalShow} className={classes.button}>
            <span>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={ classes.badge }>{ ctx.totalAmount }</span>
        </button>
    )
}

export default HeaderCartButton;