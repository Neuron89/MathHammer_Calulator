import React, { useState } from 'react';
import StatBox from './components/StatBox';
import './App.css';

function App() {
    const [values, setValues] = useState({
        attacks: 0,
        bs: 0,
        strength: 0,
        armorPen: 0,
        toughness: 0,
        armorSave: 0,
        invSave: 0
    });

    const handleValueChange = (statName, value, isAdding) => {
        setValues(prev => ({
            ...prev,
            [statName]: Math.max(0, prev[statName] + (isAdding ? value : -value))
        }));
    };

    const handleCalculate = () => {
        // Calculation logic here
        console.log('Calculating with stats:', values);
    };

    return (
        <div>
            <h1>MathHammer</h1>
            <p className="section-title">YOUR UNIT</p>
            <div className="stat-container">
                <StatBox 
                    label="Attacks" 
                    value={values.attacks}
                    onChange={(value, isAdding) => handleValueChange('attacks', value, isAdding)}
                />
                <StatBox 
                    label="BS" 
                    value={values.bs}
                    onChange={(value, isAdding) => handleValueChange('bs', value, isAdding)}
                />
                <StatBox 
                    label="Strength" 
                    value={values.strength}
                    onChange={(value, isAdding) => handleValueChange('strength', value, isAdding)}
                />
                <StatBox 
                    label="Armor Pen" 
                    value={values.armorPen}
                    onChange={(value, isAdding) => handleValueChange('armorPen', value, isAdding)}
                />
            </div>
            
            <p className="section-title">ENEMY UNIT</p>
            <div className="stat-container">
                <StatBox 
                    label="Toughness" 
                    value={values.toughness}
                    onChange={(value, isAdding) => handleValueChange('toughness', value, isAdding)}
                />
                <StatBox 
                    label="Armor Save" 
                    value={values.armorSave}
                    onChange={(value, isAdding) => handleValueChange('armorSave', value, isAdding)}
                />
                <StatBox 
                    label="Inv Save" 
                    value={values.invSave}
                    onChange={(value, isAdding) => handleValueChange('invSave', value, isAdding)}
                />
            </div>
            
            <button id="submitBtn" onClick={handleCalculate}>Calculate</button>
        </div>
    );
}

export default App;

