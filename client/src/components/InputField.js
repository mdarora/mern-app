import React from 'react'

const InputField = (props) => {
    return (
    <>
        <div className="field">
            <label htmlFor={props.id}>
                <i className={props.icon}></i>
            </label>
            <input type={props.type} id={props.id} placeholder={props.place} name={props.name} autoComplete="off" value={props.value} onChange={props.change} required />
        </div>
    </>
    )
}

export default InputField