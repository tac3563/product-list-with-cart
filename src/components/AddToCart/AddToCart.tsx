import "./AddToCart.scss";
import addToCartIcon from "/src/assets/images/icon-add-to-cart.svg";
import useStore from '../../stores/store.ts';

type AddToCartProps = {
    thumbnail: string,
    id: string,
    price: string
}

export default function AddToCart({thumbnail, id, price}: AddToCartProps) {
    const {isOpen, addToCart, counters, increment, decrement} = useStore();

    const count = counters[id] ?? 0;

  return (
    <div key={`${id}-quantity-btn-wrapper`} className="add-to-cart-button-wrapper">
        {!isOpen[id] &&
          <button onClick={() => addToCart(thumbnail, id, price)} className='add-to-cart-button'>
            <span>
              <img src={addToCartIcon} alt="cart icon" />
            </span>
            Add to Cart
          </button>
        }

        {isOpen[id] &&
        <button key={`${id}-quantity-btn`} className='quantity-button'>
            <span>
                <svg key={`${id}-decrement-btn`} onClick={() => decrement(id)} width="20" height="20"
                     viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.0001 2.5C14.1251 2.5 17.5001 5.875 17.5001 10C17.5001 14.125 14.1251 17.5 10.0001 17.5C5.87512 17.5 2.50012 14.125 2.50012 10C2.50012 5.875 5.87512 2.5 10.0001 2.5ZM10.0001 1.25C5.18762 1.25 1.25012 5.1875 1.25012 10C1.25012 14.8125 5.18762 18.75 10.0001 18.75C14.8126 18.75 18.7501 14.8125 18.7501 10C18.7501 5.1875 14.8126 1.25 10.0001 1.25Z"
                        fill="white"/>
                      <circle className="fill-circle" cx="10" cy="10" r="7.5" fill="#C73B0F"/>
                      <circle cx="10" cy="10" r="8.75" stroke="white" stroke-width="1.25" fill="#C73B0F"/>
                    <path d="M5.00012 9.375H15.0001V10.625H5.00012V9.375Z" fill="white"/>
                </svg>

            </span>
            {count}
            <span>
                <svg key={`${id}-increment-btn`} onClick={() => increment(id)} width="20" height="20"
                     viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.0001 2.5C14.1251 2.5 17.5001 5.875 17.5001 10C17.5001 14.125 14.1251 17.5 10.0001 17.5C5.87512 17.5 2.50012 14.125 2.50012 10C2.50012 5.875 5.87512 2.5 10.0001 2.5ZM10.0001 1.25C5.18762 1.25 1.25012 5.1875 1.25012 10C1.25012 14.8125 5.18762 18.75 10.0001 18.75C14.8126 18.75 18.7501 14.8125 18.7501 10C18.7501 5.1875 14.8126 1.25 10.0001 1.25Z"
                        fill="white"/>
                      <circle className="fill-circle" cx="10" cy="10" r="7.5" fill="#C73B0F"/>
                     <circle cx="10" cy="10" r="8.75" stroke="white" stroke-width="1.25" fill="#C73B0F"/>
                    <path
                        d="M15.0001 9.375H10.6251V5H9.37512V9.375H5.00012V10.625H9.37512V15H10.6251V10.625H15.0001V9.375Z"
                        fill="white"/>
                </svg>
            </span>
        </button>
        }
    </div>
  );
}
