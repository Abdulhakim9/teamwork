import cartimg from './image 4.png'

export default function Carts({img , text}) {
  return <div className='carts'>
    <div>
      <img src={img} alt="" />
      <p>{text}</p>
    </div>
  </div>
}