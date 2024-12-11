import React from 'react';
import SplitButton from './SplitButton';

function StatBox({ label, value, onChange }) {
    return (
        <div className="stat-box">
            <div className="stat-label">{label}</div>
            <div className="current-value">{value}</div>
            <div className="split-button-container">
                <div className="button-with-count">
                    <SplitButton 
                        value={1} 
                        activeCount={value > 0 ? 1 : 0}
                        onChange={onChange} 
                    />
                </div>
                <div className="button-with-count">
                    <SplitButton 
                        value={5} 
                        activeCount={value > 0 ? 1 : 0}
                        onChange={onChange} 
                    />
                </div>
                <div className="button-with-count">
                    <SplitButton 
                        value={10} 
                        activeCount={value > 0 ? 1 : 0}
                        onChange={onChange} 
                    />
                </div>
                <div className="button-with-count">
                    <SplitButton 
                        value={25} 
                        activeCount={value > 0 ? 1 : 0}
                        onChange={onChange} 
                    />
                </div>
            </div>
        </div>
    );
}

export default StatBox;

