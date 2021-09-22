import React from 'react';

const Input = ({ label, name, id, type, value, onChange, errors }) => {
    return (
        <>
            <label className="form-label" htmlFor={id}> {label} </label>
            <input
                type={type} // text, date, time, password, email
                value={value}
                className="form-control"
                name={name}
                id={id}
                onChange={onChange}
            />
            {errors[name] && <div className="alert alert-danger"> {errors[name]} </div>}
        </>
    );
}
 
export default Input;