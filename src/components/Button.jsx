import React from 'react'
import { addTip } from '../app/features/tipSlice'
import { useDispatch } from "react-redux"

export default function Button({ number }) {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(addTip(number))
    }
    return (
        <button onClick={handleClick}>{`${number}%`}</button>
    )
}
