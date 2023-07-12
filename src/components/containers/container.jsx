import Drinks from '../drinks/drinks'
import containerStyle from './container.module.sass'
const Container = () => {
  console.log(containerStyle)
  return (
    <div className={containerStyle.container}>
      <div className={containerStyle.container_dots}>
        <div className={containerStyle.title_box}>
          <h1 className={containerStyle.title}>CARTA DE BEBIDAS</h1>
        </div>
        <Drinks />
      </div>
    </div>
  )
}

export default Container
