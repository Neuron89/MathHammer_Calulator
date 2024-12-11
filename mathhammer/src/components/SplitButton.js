import React from 'react';

function SplitButton({ value, activeCount, onChange }) {
    return (
        <div className={`split-button ${activeCount > 0 ? 'active' : ''}`}>
            <div 
                className="split-button-half minus" 
                onClick={() => onChange(value, false)}
            >
                -
            </div>
            <div 
                className="split-button-half plus"
                onClick={() => onChange(value, true)}
            >
                {value}
            </div>
        </div>
    );
}

export default SplitButton;

