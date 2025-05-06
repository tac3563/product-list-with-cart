import { motion, AnimatePresence } from 'framer-motion';
import './CartSummary.scss';
import iconCarbonNeutral from "../../../assets/images/icon-carbon-neutral.svg";

type CartSummaryProps = {
    orderStatus?: boolean,
    buttonText: string,
    cartTotals: number,
    orderConfirmed?: () => void
}

export default function CartSummary({orderStatus, buttonText, cartTotals, orderConfirmed }:CartSummaryProps) {
    return (
        <>
            <div className="order-total">
                <p className="order-total-title">Order Total</p>
                <AnimatePresence mode="wait">
                    <motion.p className='order-total-figure'
                        key={cartTotals}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.25 }}
                    >
                        ${Number(cartTotals).toFixed(2)}
                    </motion.p>
                </AnimatePresence>
            </div>

            {!orderStatus && (
                <div className='cart-summary-delivery'>
                    <img className='cart-summary-carbon-icon' src={iconCarbonNeutral} alt=""/>
                    <p>This is a <strong>carbon-neutral</strong> delivery</p>
                </div>
            )}

            <button onClick={orderConfirmed} className='cart-summary-submit'>{buttonText}</button>
        </>
    )
}