import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = props => {

    const cartItemRemoveHandler = () => {}
    const cartItemAddHandler = () => {}

    const ctx = useContext(CartContext);
    
    const cartItems = <ul className={classes['cart-items']}>
                            {ctx.items.map(item => <CartItem 
                            key={item.id}
                            name={item.name} 
                            price={item.price}
                            amount={item.amount}
                            onRemove={cartItemRemoveHandler.bind(null, item.id)}
                            onAdd={cartItemAddHandler.bind(null, item)}
                            />)}
                        </ul>;

    return(
        <Modal onModalShow={props.onModalShow}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{ ctx.totalAmount }</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onModalShow} className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart;