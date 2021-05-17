import React from 'react'

const InputField = (props) => {
    return (
    <>
        <div className="field">
            <label htmlFor={props.id}>
                <i className={props.icon}></i>
            </label>
            <input type={props.type} id={props.id} placeholder={props.place} autoComplete="off" required />
        </div>
    </>
    )
}

export default InputField
