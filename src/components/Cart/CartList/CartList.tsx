import {parsePrice} from "../../../helpers/formatting.ts";
import emptyCartIcon from "../../../assets/images/illustration-empty-cart.svg";
import './CartList.scss';
import {AnimatePresence, motion} from 'framer-motion';

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

                        <AnimatePresence>
                            {!orderStatus && (
                                <motion.div
                                    initial={{opacity: 0, y: -15}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: -15}}
                                >
                                    <div className="product-name">{product}</div>
                                    <div className="product-info">
                                        <span className="product-info-qty">{counters[product]}x</span>
                                        <span className="product-info-price">@{cartList[product].price}</span>
                                        {!orderStatus && (
                                            <span
                                                className="product-info-total">${(parsePrice(cartList[product].price) * counters[product]).toFixed(2)}</span>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {removeItem && (
                        <span onClick={() => removeItem(product)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 1.25C5.125 1.25 1.25 5.125 1.25 10C1.25 14.875 5.125 18.75 10 18.75C14.875 18.75 18.75 14.875 18.75 10C18.75 5.125 14.875 1.25 10 1.25ZM10 17.5C5.875 17.5 2.5 14.125 2.5 10C2.5 5.875 5.875 2.5 10 2.5C14.125 2.5 17.5 5.875 17.5 10C17.5 14.125 14.125 17.5 10 17.5Z" fill="#AD8A85"/>
                                <path d="M13.375 14.375L10 11L6.625 14.375L5.625 13.375L9 10L5.625 6.625L6.625 5.625L10 9L13.375 5.625L14.375 6.625L11 10L14.375 13.375L13.375 14.375Z" fill="#AD8A85"/>
                            </svg>
                        </span>
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