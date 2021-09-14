import React from 'react'

export const Input = ({placeholder, className, name, onChange}) => {
    return (
        <input
            onChange={e => onChange(e)}
            name={name}
            className={className}
            placeholder={placeholder}    
        />
    )
}
