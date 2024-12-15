import React from 'react'

export default function Label({ labelname }) {
    if (labelname === "people") {
        return <label htmlFor="people">
            Number Of People
        </label>
    }
    return (
        <label htmlFor={labelname}>{labelname}</label>
    )
}
