import React from 'react'

const Field = ({ title, value, setValue, type }) => {
    return (
        <div className='if-form__field'>
            <input placeholder={title} className='if-form__field-input' value={value} onChange={setValue} type={type} />
        </div>
    )
}

export default Field