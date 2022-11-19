
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({onModalShow}) => {

    const [btnIsHighlited, setBtnIsHighlited] = useState(false);

    const ctx = useContext(CartContext);

    const items = ctx.items;

    useEffect(() => {

        if(items.length === 0) return ;

        setBtnIsHighlited(true);

        const timer = setTimeout(() => {
            setBtnIsHighlited(false)
        }, 300)

        return () => {
            clearTimeout(timer);
        }

    }, [items])
    const numberOfCartItems = ctx.items.reduce((currVal, item) => currVal + item.amount, 0);

    const btnClass = `${classes.button} ${btnIsHighlited ? classes.bump : ''}`;

    return(
        <button onClick={onModalShow} className={btnClass}>
            <span>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={ classes.badge }>{ numberOfCartItems }</span>
        </button>
    )
}

export default HeaderCartButton;