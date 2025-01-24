import button from '../pagesShahzod.module.css'

const Button = ({text}:{text:string}) => {
  return (
    <button className={button.button}>{text}</button>
  )
}

export default Button