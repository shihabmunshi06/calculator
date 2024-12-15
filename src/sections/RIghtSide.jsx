import React from 'react'
import Amount from '../components/Amount.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../app/features/tipSlice.js'

export default function RightSide() {
    const { money, person } = useSelector(state => state.bill)
    const { selectedTip } = useSelector(state => state.tip)

    const dispatch = useDispatch()

    let totalBillPerPerson = 0
    let tipPerPerson = 0

    const tipMoney = money * selectedTip / 100
    const billWithTip = money + tipMoney

    if (person > 0) {
        //sending the bills as float so no need to worry here
        totalBillPerPerson = parseFloat((billWithTip) / (person)).toFixed(2)
        tipPerPerson = parseFloat((tipMoney) / (person)).toFixed(2)
    }

    const isDisabled = person === 0;

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(reset())
    }

    return (
        <div className="right-side">
            <div className="dark-background">
                <div className="amount-divs-wrapper">
                    <Amount h1Text="Tip Amount" amount={tipPerPerson} />
                    <Amount h1Text="Total" amount={totalBillPerPerson} />
                </div>
                <div className="reset-button-wrapper">
                    <button disabled={isDisabled} onClick={handleClick} className='reset'>RESET</button>
                </div>
            </div>

        </div>
    )
}
