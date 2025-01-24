import './pagesUsmon.scss'
import vat from './Ватсап.png'
import Carts from './carts'
import img from './image 4.png'

export default function pagesUsmon() {
  return <div className="pagesUsmon">
    <div className="container">
      <div>
        <p>Главная  /  Популярные магазины</p>
        <h1>Популярные магазины</h1>
      </div>
    </div>
    <div className='allCards'>
      <Carts img={img} text="Primark (Форма заказа)" />
      <Carts img={img} text="H&M" />
      <Carts img={img} text="Mangooutlet" />
      <Carts img={img} text="Next" />
      <Carts img={img} text="Sportdirect" />
      <Carts img={img} text="Clothing at Tesco" />
      <Carts img={img} text="George at ASDA" />
      <Carts img={img} text="Accessorize" />
      <Carts img={img} text="Adidas UK" />
      <Carts img={img} text="Amazon" />
      <Carts img={img} text="ASOS" />
      <Carts img={img} text="Boohoo" />
      <Carts img={img} text="Crocs" />
      <Carts img={img} text="Ebay" />
      <Carts img={img} text="Matalan" />
      <Carts img={img} text="Mothercare" />
      <Carts img={img} text="New Look" />
      <Carts img={img} text="Puma" />
      <Carts img={img} text="Timberland" />
      <Carts img={img} text="Showroomprive" />
      <Carts img={img} text="Brand Alley" />
      <Carts img={img} text="M&S" />
      <Carts img={img} text="Clarks" />
      <Carts img={img} text="Zara" />
      <Carts img={img} text="Mango" />
      <Carts img={img} text="Zulily" />
      <Carts img={img} text="Panachekids" />
      <Carts img={img} text="Betterware" />
      <Carts img={img} text="Tucci Store" />
      <Carts img={img} text="Mini Mode" />
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