import "./Cart.scss";
import useStore from '../../stores/store.ts';
import {parsePrice} from '../../helpers/formatting.ts';
import CartSummary  from  './CartSummary/CartSummary.tsx';
import CartList  from  './CartList/CartList.tsx'

export default function Cart() {
    const {cartList, counters, removeItem} = useStore();
    const cartItems = Object.keys(cartList);

    const cartTotals = cartItems.reduce((total, product) => total + (parsePrice(cartList[product]) * counters[product]), 0)

    return (
        <aside id="cart" aria-labelledby="cart">
          <h2>
            Your Cart <span>({cartItems.length})</span>
          </h2>

            <CartList cartItems={cartItems} cartList={cartList} counters={counters} removeItem={removeItem} />

            {cartItems.length > 0 &&
                <CartSummary cartTotals={cartTotals} />
            }
        </aside>
    );
}
