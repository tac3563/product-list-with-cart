import {parsePrice} from "../../../helpers/formatting.ts";
import removeIcon from "../../../assets/images/icon-remove-item.svg";
import emptyCartIcon from "../../../assets/images/illustration-empty-cart.svg";
import './CartList.scss';

type CartListProps = {
    cartItems: string[],
    cartList: {[id:string]: string},
    counters: {[id: string]: number},
    removeItem: (id:string) => void
}

export default function CartList({cartItems, cartList, counters, removeItem}: CartListProps) {
    return (
        <ul className="cart-list">
            {cartItems.map((product) => (
                <li className='cart-list-product' key={product}>
                    <div className="product-inner">
                        <div className="product-name">{product}</div>
                        <div className="product-info">
                            <span className="product-info-qty">{counters[product]}x</span>
                            <span className="product-info-price">@{cartList[product]}</span>
                            <span className="product-info-total">${(parsePrice(cartList[product]) * counters[product]).toFixed(2)}</span>
                        </div>
                    </div>

                    <span onClick={() => removeItem(product)}><img src={removeIcon} alt="click to remove product fromc art"/></span>
                </li>
            ))}

            {cartItems.length < 1 && (
                <div className='empty-cart'>
                    <img className="empty-cart-icon" src={emptyCartIcon} alt=""/>
                    <p className="empty-cart-copy">Your added items will appear here</p>
                </div>
            )}
        </ul>
    )
}