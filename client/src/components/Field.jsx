import React from 'react'

const Field = ({ title, value, setValue, type }) => {
    return (
        <div>
            <p>{title}</p>
            <input value={value} onChange={setValue} type={type} />
        </div>
    )
}

export default Field