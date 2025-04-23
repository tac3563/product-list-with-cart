import "./AddToCart.scss";
import addToCartIcon from "/src/assets/images/icon-add-to-cart.svg";
import incrementIcon from "/src/assets/images/icon-increment-quantity.svg"
import decrementIcon from "/src/assets/images/icon-decrement-quantity.svg"
import useStore from '../../stores/store.ts';

type AddToCartProps = {
    id: string
}

export default function AddToCart({id}: AddToCartProps) {
    const {isOpen, setIsOpen, counters, increment, decrement} = useStore();

    const count = counters[id] || 0;

  return (
    <div key={`${id}-quantity-btn-wrapper`} className="add-to-cart-button-wrapper">
        {!isOpen[id] &&
          <button onClick={() => setIsOpen(id)} className='add-to-cart-button'>
            <span>
              <img src={addToCartIcon} alt="cart icon" />
            </span>
            Add to Cart
          </button>
        }

        {isOpen[id] &&
        <button key={`${id}-quantity-btn`} className='quantity-button'>
            <span>
                <img key={`${id}-decrement-btn`} onClick={() => decrement(id)} src={decrementIcon} alt=""/>
            </span>
            {count}
            <span>
                <img key={`${id}-increment-btn`}  src={incrementIcon} onClick={() => increment(id)} alt=""/>
            </span>
        </button>
        }

    </div>
  );
}
