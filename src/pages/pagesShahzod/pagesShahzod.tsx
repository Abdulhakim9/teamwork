import classes from './pagesShahzod.module.css'
import BigSection from './components/bigSection'
import Button from './components/button'
import img1 from './images/img1.png'
import arrowLeft from './images/arrowLeft.png'
import arrowRight from './images/arrowRight.png'
import sixImgs1 from './images/sixImgs1.png'
import sixImgs2 from './images/sixImgs2.png'
import sixImgs3 from './images/sixImgs3.png'
import sixImgs4 from './images/sixImgs4.png'
import sixImgs5 from './images/sixImgs5.png'
import sixImgs6 from './images/sixImgs6.png'
import russia from './images/russia.png'
import england from './images/england.png'
import jacket from './images/jacket.png'
import tshirt from './images/tshirt.png'
import jeans from './images/jeans.png'
import fourImgs1 from './images/fourImgs1.png'
import fourImgs2 from './images/fourImgs2.png'
import fourImgs3 from './images/fourImgs3.png'
import fourImgs4 from './images/fourImgs4.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import smallImgs1 from './images/smallImgs1.png'
import smallImgs2 from './images/smallImgs2.png'
import smallImgs3 from './images/smallImgs3.png'
import smallImgs4 from './images/smallImgs4.png'
import smallImgs5 from './images/smallImgs5.png'
import threeRowImgs1 from './images/threeRowImgs1.png'
import threeRowImgs2 from './images/threeRowImgs2.png'
import threeRowImgs3 from './images/threeRowImgs3.png'
import greenChevronDown from './images/greenChevronDown.png'
import fourBigImgs1 from './images/fourBigImgs1.png'
import fourBigImgs2 from './images/fourBigImgs2.png'
import fourBigImgs3 from './images/fourBigImgs3.png'
import fourBigImgs4 from './images/fourBigImgs4.png'
import three2Imgs1 from './images/three2Imgs1.png'
import three2Imgs2 from './images/three2Imgs2.png'
import three2Imgs3 from './images/three2Imgs3.png'
import fourSquareImgs1 from './images/fourSquareImgs1.png'
import fourSquareImgs2 from './images/fourSquareImgs2.png'
import fourSquareImgs3 from './images/fourSquareImgs3.png'
import fourSquareImgs4 from './images/fourSquareImgs4.png'
import fiveStars from './images/fiveStars.png'
import SixImgs from './components/sixImgs'
import SectionSelects from './components/sectionSelects'
import Row from './components/row'

const PagesShahzod = () => {
  return (
    <>
      <div className={classes.firstSection}>
        <div>
          <h1>Доставка товаров <br /> из Великобритании <br /> в Россию</h1>
          <p>
            Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, <br />
            чтобы покупать со скидками в UK одежду, обувь, гаджеты известных <br />
            брендов и безопасно отправлять вещи в Россию.
          </p>
          <button>Получить адрес в UK</button>
        </div>
        <img src={img1} />
      </div>
      <div className={classes.secondSection}>
        <h1>Насколько выгодно <br /> покупать?</h1>
        <div className={classes.sixImgs}>
          <img src={arrowLeft} />
          <img src={sixImgs1} />
          <SixImgs img={sixImgs2} text='Электроника'/>
          <SixImgs img={sixImgs3} text='Аксессуары'/>
          <SixImgs img={sixImgs4} text='Для детей'/>
          <SixImgs img={sixImgs5} text='Для спорта'/>
          <SixImgs img={sixImgs6} text='Косметика'/>
          <img src={arrowRight} />
        </div>
        <div className={classes.section2Div}>
          <div className={classes.section2DivDiv}>
            <h2>Columbia Barlow Pass <br /> 550 Turbodown Jacket</h2>
            <div className={classes.countryDiv}>
              <img src={russia} />
              <div>
                <h4>Цена в России</h4>
                <h3>7891,46₽</h3>
              </div>
            </div>
          </div>
          <img src={jacket} />
          <div className={classes.section2DivDiv}>
            <h2>Доставка одежды из <br /> Великобритании  от <span>£7.79</span></h2>
            <div className={classes.countryDiv}>
              <img src={england} />
              <div>
                <h4>Цена в UK</h4>
                <h3><span>£80.62</span></h3>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.section2LastDiv}>
          <div>
            <img src={tshirt} />
            <img src={arrowLeft} />
          </div>
          <defs>
            <h4>Срок доставки примерно 10 дней</h4>
            <h2>Вы экономите до <span>$119.56</span></h2>
          </defs>
          <div>
            <img src={arrowRight} />
            <img src={jeans} />
          </div>
        </div>
      </div>
      <div className={classes.smallSection}>
        <div>
          <img src={fourImgs1} />
          <h3>Экономия <br /> до 70%</h3>
        </div>
        <defs></defs>
        <div>
          <img src={fourImgs2} />
          <h3>Только подлинная <br /> продукция</h3>
        </div>
        <defs></defs>
        <div>
          <img src={fourImgs3} />
          <h3>Оперативная <br /> доставка</h3>
        </div>
        <defs></defs>
        <div>
          <img src={fourImgs4} />
          <h3>Огромный <br /> выбор товаров</h3>
        </div>
      </div>
      <BigSection img={img2} main={'Поручите нашим мастерам шопинга оформить заказы в английских магазинах и освободите время для более важных дел.'} 
      info={'Такой способ покупки также подойдёт, если магазин принимает только английские карты.'}
      btnText={'Попробовать'} mainSize={'30px'} mainFont={'700'}/>
      <h1 className={classes.h1}>
        OkeyPost удобная и быстрая доставка <br />
        посылок из Великобритании 
      </h1>
      <p className={classes.p}>
        Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши <br />
        посылки на складе, при необходимости объединим несколько доставок в одну <br />
        и отправим их к вам надежно упакованными.
      </p>
      <div className={classes.sectionSelects}>
        <SectionSelects main='Страна:' img={smallImgs1} info='Россия'/>
        <SectionSelects main='Город:' img={smallImgs2} info='Москва'/>
        <SectionSelects main='Индекс:' img={smallImgs3} info='Введите индекс'/>
        <SectionSelects main='Вес посылки:' img={smallImgs4} info='0,5'/>
        <SectionSelects main='Дополнительные услуги:' img={smallImgs5} info='Выберите услуги'/>
      </div>
      <div className={classes.marginBtn}>
        <Button text='Рассчитать'/>
      </div>
      <h1 className={classes.h1}>Варианты доставки:</h1>
      <div className={classes.rows}>
        <Row img={threeRowImgs1} main='Почта России' stroki='10-14 дней' stoimost='от £27.00' itogo='£41.99'/>
        <Row img={threeRowImgs2} main='EMS ПОЧТА РОССИЯ' stroki='9-12 дней' stoimost='от £40.00' itogo='£54.55'/>
        <Row img={threeRowImgs3} main='ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ' stroki='10-14 дней' stoimost='от £13.00' itogo='£90.50'/>
      </div>
      <h1 className={classes.h1}>
        4 простых шага для ваших <br />
        покупок в Великобритании 
      </h1>
      <div className={classes.cartDiv}>
        <div>
          <img src={fourBigImgs1} />
          <h2>ВЫ ВЫБИРАЕТЕ <br /> ТОВАР</h2>
          <p>в английском магазине, оплачиваете и <br /> указываете <span>адрес склада</span> OkeyPost</p>
        </div>
        <div>
          <img src={fourBigImgs2} />
          <h2>ПОКУПКИ ПРИХОДЯТ <br /> НА СКЛАД</h2>
          <p>и появляются в вашем личном кабинете <br /> на нашем сайте</p>
        </div>
        <div>
          <img src={fourBigImgs3} />
          <h2>ОТПРАВЛЯЕМ ИХ <br /> К ВАМ ДОМОЙ</h2>
          <p>в надежной упаковке, по выгодной <br /> цене и очень быстро</p>
        </div>
        <div>
          <img src={fourBigImgs4} />
          <h2>ЗАБИРАЕТЕ СВОЮ <br /> ПОСЫЛКУ</h2>
          <p>в пункте выдачи, на почте <br /> или с курьером</p>
        </div>
      </div>
      <p className={classes.p}>Не хотите разбираться самостоятельно, наши мастера шопинга с радостью <br /> 
      купят все товары за вас.</p>
      <div className={classes.marginBtn}>
        <Button text='Быстрая покупка'/> 
      </div>
      <div style={{marginTop: '50px'}}></div>
      <BigSection img={img3} main={'Виртуальный тур по нашему складу в реальном времени'}
      info='Вы можете всегда посмотреть на нашу слаженую работу на складе' 
      btnText='Попробовать' mainSize='44px' mainFont='800'/>
      <h1 className={classes.h1}>
        120 000 довольных клиентов в России <br /> уже сделали свой выбор
      </h1>
      <p className={classes.p}>
        За последний год десятки тысяч наших клиентов заказали <br />
        товары из Англии и оставили 19 633 отзыва
      </p>
      <div className={classes.threeCarts}>
        <div>
          <img src={three2Imgs1} />
          <h2>Больше не значит дороже</h2>
          <p>С ростом веса посылки цена за каждые 0.5 кг <br /> уменьшается в прогрессии.</p>
        </div>
        <div>
          <img src={three2Imgs2} />
          <h2>Быстрая обработка посылок</h2>
          <p>Посылка обрабатывается не дольше 48 часов <br /> после поступления на склад.</p>
        </div>
        <div>
          <img src={three2Imgs3} />
          <h2>SMS-уведомления</h2>
          <p>Отслеживайте весь процесс с помощью <br /> sms-уведомлений.</p>
        </div>
      </div>
      <h1 className={classes.h1}>Отзывы и цитаты блогеров:</h1>
      <div className={classes.fourImgs}>
        <div style={{display: 'flex', gap: '50px', alignItems: 'center', paddingLeft: '10px'}}>
          <img src={fourSquareImgs1} />
          <div style={{height: '75%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px'}}>
              <h3>NIKOLAY S</h3>
              <img src={fiveStars} />
              <p>Ваша доставка самая быстрая и дешёвая!!!</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px'}}>
              <h2>Дата: <span>16 Ноября 2021</span></h2>
              <h2>Город: <span>Санкт-Петербург</span></h2>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: '50px', alignItems: 'center', paddingLeft: '10px'}}>
          <img src={fourSquareImgs2} />
          <div style={{height: '75%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px'}}>
              <h3>DMITRIY D</h3>
              <img src={fiveStars} />
              <p>Пуховик Levi’s c eBay. Всё приехало <br /> быстро и целым.</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px'}}>
              <h2>Дата: <span>16 Ноября 2021</span></h2>
              <h2>Город: <span>Москва</span></h2>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: '50px', alignItems: 'center', paddingLeft: '10px'}}>
          <img src={fourSquareImgs3} />
          <div style={{height: '75%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px'}}>
              <h3>VLADIMIR E</h3>
              <img src={fiveStars} />
              <p>
                Огонь, как всегда! Отдельное спасибо за <br />
                доп.упаковку, часики от Apple пришли в <br />
                простом бумажном пакете )</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px'}}>
              <h2>Дата: <span>16 Ноября 2021</span></h2>
              <h2>Город: <span>Санкт-Петербург</span></h2>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: '50px', alignItems: 'center', paddingLeft: '10px'}}>
          <img src={fourSquareImgs4} />
          <div style={{height: '75%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px'}}>
              <h3>Оксана</h3>
              <img src={fiveStars} />
              <p>Очень быстро, надежно! Как всегда <br /> большое спасибо за работу!</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px'}}>
              <h2>Дата: <span>16 Ноября 2021</span></h2>
              <h2>Город: <span>Odintsovo</span></h2>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.marginBtn}>
        <Button text='Все отзывы'/> 
      </div>
      <h1 className={classes.h1}>Ваш личный адрес в Великобритании  для покупок</h1>
      <p className={classes.p}>
        С нами вы получаете целых два адреса в UK! У нас есть два склада для приема посылок – в Лондоне и Манчестере. Указывайте в магазине тот из них, отправка
        на который обойдется дешевле (или покупка будет без налогов). Чаще всего в Лондоне наши клиенты заказывают одежду и обувь, а в Манчестер идут гаджеты и
        всё остальное. С OkeyPost вы всегда получаете максимальную выгоду!
      </p>
      <p className={classes.p}>
        При доставке из UK в Россию все ваши товары обязательно страхуются. Прием посылок на наш склад, их обработка, удаление лишних коробок, хранение 
        сроком до 70 дней – у нас полностью бесплатно. Мы также бесплатно проводим объединение посылок из разных магазинов в одну. Это необходимо для 
        снижения стоимости доставки посылок из UK в Россию.
      </p>
      <p className={classes.p}>
        У нас самая выгодная доставка! От $11.99 за посылку! А если у вас есть какие-то особенные требования, вроде проверки техники или дополнительной пленки для 
        самых хрупких товаров, – операторы нашего склада с радостью выполнят их по спецзапросу.
      </p>
      <p className={classes.p}>
        Okeypost.com – это надежно, быстро и выгодно. А в наших соцсетях вы всегда найдете информацию о лучших скидках fyukbqcrb[ магазинов. Не обязательно 
        заходить в Черную пятницу или Prime Day, крутые акции проходят каждый день!
      </p>
      <div className={classes.lastSection}>
        <h2>Подпишитеть и будьте в курсе <br /> всех скидок и акций магазинов <br /> Великобритании!</h2>
        <input type="text" placeholder='Введите ваш email'/>
        <Button text='Подписаться'/>
      </div>
    </>
  )
}

export default PagesShahzod