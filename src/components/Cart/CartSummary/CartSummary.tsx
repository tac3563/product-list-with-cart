import { motion, AnimatePresence } from 'framer-motion';
import './CartSummary.scss';
import iconCarbonNeutral from "../../../assets/images/icon-carbon-neutral.svg";

type CartSummaryProps = {
    cartTotals: number
}

export default function CartSummary({cartTotals}:CartSummaryProps) {
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
            <div className='cart-summary-delivery'>
                <img className='cart-summary-carbon-icon' src={iconCarbonNeutral} alt=""/>
                <p>This is a <strong>carbon-neutral</strong> delivery</p>
            </div>

            <button className='cart-summary-submit'>Confirm Order</button>
        </>
    )
}