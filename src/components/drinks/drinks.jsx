import {useEffect, useState} from "react"
import Drink from "./drink"
import drinkStyle from './drink.module.sass'

const Drinks = () => {
  const [drinks, setDrinks] = useState([])
  useEffect(() => {
    fetch('json/drinks.json')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setDrinks(res)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className={drinkStyle.drinks_container}>
      {drinks.length > 0 && drinks.map((drink, index) => (
        (index % 2 === 1) ?
          <Drink align="left" data={drink} /> :
          <Drink data={drink} />
      ))}
    </div>
  )
}
export default Drinks
