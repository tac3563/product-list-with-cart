import "./Cart.scss";
import useStore from '../../stores/store.ts';
import removeIcon from '../../assets/images/icon-remove-item.svg';
import {parsePrice} from '../../helpers/formatting.ts'

export default function Cart() {
    const {cartList, counters, removeItem} = useStore();
    const cartItems = Object.keys(cartList);

    return (
        <aside id="cart" aria-labelledby="cart">
          <h2>
            Your Cart <span>({cartItems.length})</span>
          </h2>
              <ul className="cart-list">
                  {cartItems.map((product) => (
                      <li className='cart-list-product' key={product}>
                          <div className="product-inner">
                              <div className="product-name">{product}</div>
                              <div className="product-info">
                                  <span className="product-info-qty">{counters[product]}x</span>
                                  <span className="product-info-price">@{cartList[product]}</span>
                                  <span>${(parsePrice(cartList[product]) * counters[product]).toFixed(2)}</span>
                              </div>
                          </div>

                          <span onClick={() => removeItem(product)}><img src={removeIcon} alt=""/></span>
                      </li>
                  ))}
              </ul>
        </aside>
    );
}
