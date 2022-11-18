
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./MealItem.module.css";
import { MealItemForm } from "./MealItemForm";

const MealItem = (props) => {

  const ctx = useContext(CartContext);
  const onSubmitHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    })
  }
  return (
    <li className={ classes.meal }>
      <div>
        <h3>{props.name}</h3>
        <div className={ classes.description }> {props.description} </div>
        <div className={ classes.price }>{props.price}</div>
      </div>
      <div>
        <MealItemForm onSubmit={onSubmitHandler} />
      </div>
    </li>
  );
};

export default MealItem;