import drinkStyle from './drink.module.sass'
const Drink = ({data, align}) => {
  return (
    <div className={drinkStyle.drink_container} >
      <div className={`${drinkStyle.drink_box_img} ${align === 'left' ? drinkStyle.left : drinkStyle.right}`}>
        <img className={drinkStyle.drink_img} src={data.img} />
      </div>
      <div className={`${drinkStyle.drink_data} ${align === 'left' ? drinkStyle.right : drinkStyle.left}`}>
        <h2 className={drinkStyle.drink_name}>{data.name}</h2>
        <p className={drinkStyle.drink_description}>{data.description}</p>
        <span className={drinkStyle.drink_price}>{data.price} Bs.</span>
      </div>
    </div>
  )
}

export default Drink
