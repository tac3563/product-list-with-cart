import './OrderModal.scss';
import React from 'react';
import orderConfirmedIcon from "../../assets/images/icon-order-confirmed.svg";

type OrderModal = {
    children: React.ReactNode;
}

export default function OrderModal({children}: OrderModal) {
    return (
        <>
            <div className="order-modal">
                <div className="order-modal-wrapper">
                    <img className='order-confirmed-icon' alt="" src={orderConfirmedIcon} />
                    <h2 className='order-confirmed-title'>Order Confirmed</h2>
                    <p className='order-confirmed-subtitle'>We hope you enjoy your food!</p>
                    {children}
                </div>
            </div>
        </>
    )
}