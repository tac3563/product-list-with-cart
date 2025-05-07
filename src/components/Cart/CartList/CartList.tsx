import {parsePrice} from "../../../helpers/formatting.ts";
import removeIcon from "../../../assets/images/icon-remove-item.svg";
import emptyCartIcon from "../../../assets/images/illustration-empty-cart.svg";
import './CartList.scss';

type CartListProps = {
    orderStatus?: boolean,
    cartItems: string[],
    cartList: {[id:string]: {
        price: string,
        thumbnail: string,
    }},
    counters: {[id: string]: number},
    removeItem?: (id:string) => void
}

// TODO: refactor cart list items into smaller components:
export default function CartList({orderStatus, cartItems, cartList, counters, removeItem}: CartListProps) {
    return (
        <ul className="cart-list">
            {cartItems.map((product) => (
                <li className='cart-list-product' key={product}>
                    <div className="product-inner">

                        {orderStatus && (
                            <>
                                <img className='product-thumbnail' src={cartList[product].thumbnail} alt=''/>
                                <div className="product">
                                    <div className="product-name">{product}</div>
                                    <div className="product-info">
                                        <span className="product-info-qty">{counters[product]}x</span>
                                        <span className="product-info-price">@{cartList[product].price}</span>
                                    </div>
                                </div>

                                <span
                                    className="product-info-total">${(parsePrice(cartList[product].price) * counters[product]).toFixed(2)}</span>
                            </>
                        )}

                        {!orderStatus && (
                            <>
                            <div className="product-name">{product}</div>
                                <div className="product-info">
                                    <span className="product-info-qty">{counters[product]}x</span>
                                    <span className="product-info-price">@{cartList[product].price}</span>
                                    {!orderStatus && (
                                        <span
                                            className="product-info-total">${(parsePrice(cartList[product].price) * counters[product]).toFixed(2)}</span>
                                    )}
                                </div>
                            </>
                        )}

                    </div>

                    {removeItem && (
                        <span onClick={() => removeItem(product)}><img src={removeIcon}
                                                                       alt="click to remove product fromc art"/></span>
                    )}
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