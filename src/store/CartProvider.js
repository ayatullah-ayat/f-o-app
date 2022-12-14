import { useReducer } from "react";
import CartContext from "./cart-context";

const CartProvider = props => {

    const defaultCartState = {
        items: [],
        totalAmount: 0,
    }

    const cartReducer = (state, action) => {

        if(action.type === 'ADD') {
            let updatedItems = null;
            const updatedTotalAmount = Number(state.totalAmount) + (action.item.price * action.item.amount);

            const existingCartItemIndex = state.items.findIndex(item => action.item.id === item.id);
            
            if(existingCartItemIndex >= 0) {
                const cartItems = [...state.items];
                cartItems[existingCartItemIndex] = {...cartItems[existingCartItemIndex], amount: cartItems[existingCartItemIndex].amount + action.item.amount}
                updatedItems = cartItems;
            }else {
                updatedItems = state.items.concat(action.item);
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount.toFixed(2)
            }
            
        }
        if(action.type === 'REMOVE') {
            const cartItems = [...state.items];
            let updatedItems;
            
            const selectedCartItemIndex = cartItems.findIndex(item => item.id === action.id);
            const cartItem = cartItems[selectedCartItemIndex];
            
            // price updated
            const updatedTotalAmount = Number(state.totalAmount) - cartItem.price;

            console.log('cartItem', cartItem);
            if(cartItem.amount === 1) {
                updatedItems = cartItems.filter(item => item.id !== action.id);
            }else {
                const updateItem = {...cartItem, amount: cartItem.amount - 1}
                cartItems[selectedCartItemIndex] = updateItem; // override
                updatedItems = cartItems;
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount.toFixed(2)  
            }
        }
        return defaultCartState
    }

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    };
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
                {props.children}
            </CartContext.Provider>
}

export default CartProvider;