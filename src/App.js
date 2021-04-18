import React,{ useState } from 'react';
import './App.css';
import Search from './components/Search';
import ColorCard from './components/ColorCard';

function App() {
  const [data, setData] = useState([]);

  const handleColourData = (input, setInput) => {
      fetch(`https://api.color.pizza/v1/names/${input}`)
      .then(res => {
        if(res.status===200)
          return res.json();
        else
          throw Error('Colour Not Found !'); 
      })
      .then(obj => {
          let colorArr = obj.colors.slice(0,50);
          // console.log(colorArr);
          setData(colorArr);
          setInput(" ");
      })
      .catch(err => alert(err));
  };

  return (
    <div className="App">
      <h2 id="title">Color Picker</h2>
      <div id="display-color">
        {
          data.map((item, itemIndex) => {
            return <ColorCard 
                      key={itemIndex} 
                      colour={{backgroundColor: item.hex}} 
                      colourTag={item.hex}
                      title={item.name} 
                  />;
          })
        }
      </div>
      <Search handleColourData={handleColourData}/>
    </div>
  );
}

export default App;
