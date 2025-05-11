import './OrderModal.scss';
import { motion } from "framer-motion";
import React from 'react';
import orderConfirmedIcon from "../../assets/images/icon-order-confirmed.svg";

type OrderModal = {
    children: React.ReactNode;
}

export default function OrderModal({children}: OrderModal) {
    return (
        <>
            <motion.div
                key="orderModalWrapper"
                className="order-modal-wrapper"
                initial={{opacity: 0, scale: 0.75}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0}}
            >
                <img className='order-confirmed-icon' alt="" src={orderConfirmedIcon}/>
                <h2 className='order-confirmed-title'>Order Confirmed</h2>
                <p className='order-confirmed-subtitle'>We hope you enjoy your food!</p>
                {children}
            </motion.div>
        </>
    )}