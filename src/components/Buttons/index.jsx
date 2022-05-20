import React from 'react';
import './Button.module.scss';

function Buttons({
    children,
    background,
    color = 'black',
    onClick,
    icon,
    disabled,
    className
}) {
    return (
        <button
            disabled={disabled}
            style={{
                background,
                color
            }}
            onClick={() => onClick()}
            className={className}
        >
            {icon}
            {children}
        </button>
    );
}

export default Buttons;