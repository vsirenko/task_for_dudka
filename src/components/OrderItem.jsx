import React from 'react'

export const OrderItem = ({id, client, pickup,dropoff, courier, status = true}) => {
    return (
        <div className='packages-item'>
            <div className="packages-item__items packages-item__items-id">#{id}</div>
            <div className="packages-item__items packages-item__items-text">{client}</div>
            <div className="packages-item__items packages-item__items-text">{pickup}</div>
            <div className="packages-item__items packages-item__items-text">{dropoff}</div>
            <div className="packages-item__items packages-item__items-text">{courier}</div>
            {status && <div className="packages-item__items ">
                <div className="packages-item__status">online</div>
            </div>}
        </div>
    )
}
