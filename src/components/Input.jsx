import React, { useEffect, useState } from "react";
import Label from "./Label";
import { useDispatch, useSelector } from "react-redux";

import { addBill } from "../app/features/billSlice";
import { addPerson } from "../app/features/billSlice";

export default function Input({ inputName }) {
    const dispatch = useDispatch();

    const [bill, setBill] = useState("");
    const [people, setPeople] = useState("");

    const storeMoney = useSelector(state => state.bill.money)
    const storePerson = useSelector(state => state.bill.person)

    //resetting from values on reset dispatch
    useEffect(() => {
        if (storeMoney === 0 && storePerson === 0) {
            setBill("")
            setPeople("")
        }
    }, [storeMoney, storePerson])

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "bill") {
            setBill(value);
        } else if (name === "people") {
            setPeople(value);
        }
    };



    const handleSubmit = (e, inputName) => {
        e.preventDefault();

        if (inputName === "bill") {
            dispatch(addBill(parseFloat(bill)));
        }
        if (inputName === "people") {
            dispatch(addPerson(people));
        }
    };


    return (
        <form action="submit" onSubmit={(e) => handleSubmit(e, inputName)}>
            <Label labelname={inputName} />

            <input
                typeof="text"
                value={inputName === "bill" ? bill : people}
                name={inputName}
                id={inputName}
                onChange={handleChange}
                placeholder="0"
            />
        </form>
    );
}
