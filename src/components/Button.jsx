import React, { useRef } from 'react'
import { addTip } from '../app/features/tipSlice'
import { useDispatch } from "react-redux"

export default function Button({ number, isActive, onButtonClick }) {
    const buttonRef = useRef()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(addTip(number))
        
        onButtonClick(number)
    }
    return (
        <button
            className={isActive ? 'active' : ''}
            ref={buttonRef}
            onClick={handleClick}>
            {`${number}%`}
        </button>
    )
}
