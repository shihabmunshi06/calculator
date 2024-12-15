import React from 'react'

export default function Amount({ h1Text, amount }) {
    return (
        <div className='amount-wrapper'>
            <div className="left">
                <h1>{h1Text}</h1>
                <p>/ person</p>
            </div>
            <div className="right">
                <p className="amount-number">${amount === 0 ? "0.00" : amount}</p>
            </div>

        </div>
    )
}
