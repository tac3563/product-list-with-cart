import './OrderModal.scss';
import React from 'react';

type OrderModal = {
    children: React.ReactNode;
}

export default function OrderModal({children}: OrderModal) {
    return (
        <>
            <div className="order-modal">
                <h2>Order Confirmed</h2>
                <p>We hope you enjoy your food!</p>
                {children}
            </div>
        </>
    )
}