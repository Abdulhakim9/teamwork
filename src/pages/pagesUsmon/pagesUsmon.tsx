import './pagesUsmon.scss'
import vat from './Ватсап.png'
import Carts from './carts'


export default function pagesUsmon() {
  return <div className="pagesUsmon">
    <div className="container">
      <div>
        <p>Главная  /  Популярные магазины</p>
        <h1>Популярные магазины</h1>
      </div>
    </div>
    <div className='allCards'>
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
      <Carts />
    </div>
    <div className='container'> 
      <div className='pagesUsmon__content'>
        <h1>Остались вопросы? Спросите нас в соцсетях!</h1>
        <div>
          <img src={vat} alt="" />
          <img src={vat} alt="" />
          <img src={vat} alt="" />
        </div>
      </div>
    </div>
  </div>
}