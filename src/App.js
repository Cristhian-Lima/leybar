import {useEffect, useState} from "react";

function App() {
  const [drinks, setDrinks] = useState([])
  useEffect(() => {
    fetch("json/drinks.json")
      .then(res => res.json())
      .then(res => setDrinks(res))

  }, [])
  return (
    <div className="App">
      {drinks.length > 0 && drinks.map(drink => (
        <div>
          <h1>{drink.name}</h1>
          <p>{drink.description}</p>
          <img src={drink.img} />
        </div>
      ))}
    </div>
  );
}

export default App;
