import classes from '../pagesShahzod.module.css'
import greenChevronDown from '../images/greenChevronDown.png'

const Row = ({img, main, stroki, stoimost, itogo}:
    {img:string, main:string, stroki:string, stoimost:string, itogo:string}
) => {
  return (
    <div className={classes.row}>
        <div style={{width: '670px', display: 'flex', alignItems: 'center', justifyContent: 'start', 
            gap: '20px', flexDirection: 'row', paddingLeft: '30px'}}>
            <img src={img} />
            <h4>{main}</h4>
        </div>
        <div>
            <p>Сроки:</p>
            <h3>{stroki}</h3>
        </div>
        <div>
            <p>Стоимость доставки:</p>
            <h3>{stoimost}</h3>
        </div>
        <div>
            <p>Итого:</p>
            <h3>{itogo}</h3>
        </div>
        <img src={greenChevronDown} style={{marginLeft: '30px'}}/>
    </div>
  )
}

export default Row