import "./Cart.scss";
import useStore from '../../stores/store.ts';

export default function Cart() {
    const {cartList, counters} = useStore();
    const cartItems = Object.keys(cartList);

    return (
        <aside id="cart" aria-labelledby="cart">
          <h2>
            Your Cart <span>({cartItems.length})</span>
          </h2>
              <ul>
                  {cartItems.map((product) => (
                      <li key={product}>{product} <span>{counters[product]}x</span>  <span>{cartList[product]}</span>
                      </li>
                  ))}
              </ul>
        </aside>
    );
}
