import classes from '../pagesShahzod.module.css'
import Button from './button'

const BigSection = ({img, main, info, btnText, mainSize, mainFont}:
    {img:string, main:string, info:string, btnText:string, mainSize:string, mainFont:string}) => {
  return (
    <div className={classes.bigSection}>
        <img src={img} />
        <div>
            <h2 style={{fontSize: mainSize, fontWeight: mainFont}}>{main}</h2>
            <p>{info}</p>
            <Button text={btnText}/>
        </div>
    </div>
  )
}

export default BigSection