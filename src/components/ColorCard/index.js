import React from 'react';
import './index.css';

function ColorCard({colour, colourTag, title}) {
    return (
        <div id="card" title={title}>
            <div id="card-body" style={colour}></div>
            <div id="card-tag">{colourTag}</div>
        </div>
    );
}

export default ColorCard;
