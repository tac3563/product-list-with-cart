import "./AddToCart.scss";
import addToCartIcon from "/src/assets/images/icon-add-to-cart.svg";
import incrementIcon from "/src/assets/images/icon-increment-quantity.svg"
import decrementIcon from "/src/assets/images/icon-decrement-quantity.svg"
import useStore from "../../stores/store.ts";



export default function AddToCart(id: string) {
    const {counter, increment, decrement} = useStore();

  return (
    <div key={`${id}-quantity-btn-wrapper`} className="add-to-cart-button-wrapper">
      {/*<button className='add-to-cart-button'>*/}
      {/*  <span>*/}
      {/*    <img src={addToCartIcon} alt="cart icon" />*/}
      {/*  </span>*/}
      {/*  Add to Cart*/}
      {/*</button>*/}

        <button key={`${id}-quantity-btn`} className='quantity-button'>
            <span> <img key={`${id}-decrement-btn`} onClick={decrement} src={decrementIcon} alt=""/></span>
            {counter}
            <span> <img key={`${id}-increment-btn`} onClick={increment} src={incrementIcon} alt=""/></span>
        </button>
    </div>
  );
}
