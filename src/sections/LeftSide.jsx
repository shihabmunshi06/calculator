import { useEffect, useState } from "react"
import React from 'react'

import Button from "../components/Button"
import Input from "../components/Input"
import { addTip } from "../app/features/tipSlice"
import { useDispatch } from "react-redux"


export default function LeftSide() {
    const data = [5, 10, 15, 25, 50]

    const dispatch = useDispatch();

    const [customTip, setCustomTip] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState("")

    const handleCustom = () => {
        setIsEditing(true)
    }

    const handleCustomSubmit = (e) => {
        e.preventDefault();
        if (!customTip.trim()) {
            setError("Please enter a value.");
            return;
        }

        if (isNaN(customTip) || Number(customTip) <= 0) {
            setError("Please enter a valid positive number.");
            return;
        }

        dispatch(addTip(Number(customTip)));
        setCustomTip("");
        setIsEditing(false);
        setError("");
    };

    const handleChange = (e) => {
        const { value } = e.target;
        if (/^[0-9]*$/.test(value)) {
            setCustomTip(value);
            setError("");
        } else {
            setError("Only positive numbers are allowed.");
        }
    };



    const handleBlur = () => {
        // Trim leading/trailing whitespace and validate the input
        if (!customTip.trim() || isNaN(customTip) || Number(customTip) <= 0) {
            setError("Please enter a valid positive number.");
            setCustomTip("");
        } else {
            setError("");
        }
    };


    return (
        <div className="left-side">
            <Input inputName="bill" />
            <div className="select-tip-container">
                <p>Select Tip %</p>
                <div className="tip-buttons-container">
                    {data.map(e => <Button key={e} number={e} />)}

                    {isEditing ? (
                        <form className="custom-form" onSubmit={handleCustomSubmit}>
                            <input
                                className="custom-input"
                                type="text"
                                value={customTip}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoFocus
                            />
                            {error && <p className="custom-error">{error}</p>}
                        </form>

                    ) : (
                        <button onClick={handleCustom} className='custom-button'>Custom</button>
                    )
                    }

                </div>
            </div>
            <Input inputName="people" />
        </div>
    )
}
