import React from 'react'

const Button = ({className, value, text, type, onClick}) => {

    return (
        <div className={`button ${className}`}
              data-value={value}
              data-type={type}
              onClick={onClick}>
          {text}
        </div>
      );
}

export default Button