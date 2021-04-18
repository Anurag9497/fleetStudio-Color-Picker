import React,{ useState } from 'react';
import './index.css';

function Search({handleColourData}) {
    const [input, setInput] = useState(" ");

const handleInput = (event) => {
    setInput(event.target.value);
};

    return (
        <div id="search">
            <input 
                id="search-input" 
                type="text" 
                value={input} 
                onChange={handleInput}
            />
            <button id="search-button" type="button" onClick={() => handleColourData(input, setInput)}>Search</button>
        </div>
    );
}

export default Search;
