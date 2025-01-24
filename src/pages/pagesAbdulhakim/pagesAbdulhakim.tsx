import React from 'react'
import Card from './components/card'
import img from "./pictures/Вайбер.png"
import img1 from "./pictures/Ватсап.png"
import img2 from "./pictures/Вайбер.png"

const PagesAbdulhakim = () => {
  return (
    <div>
        <div className="drep">
            <p className="textfonts">Главная  /  Часто задаваемые вопросы</p>
            <p className="textfont">Отвечаем на вопросы доставки</p>
        </div>
        <div className="flexplex">
            <p className="virt">Виртуальный адрес в Великобритании</p>
            <div className="qash">
                <Card text={"Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?"}/>
                <Card text={"Как я узнаю что заказ пришел на склад?"}/>
                <Card text={"Покупки на Eбeй / Ebay"}/>
                <Card text={"Что делать после того, как я выкупил заказ самостоятельно на ваш адресс?"}/>
                <Card text={"Как купить на виртуальный адрес?"}/>
                <Card text={"Сколько стоит виртуальный адрес?"}/>
                <Card text={"Как купить на виртуальный адрес?"}/>
            </div>
        </div>
        <div className="flexplex">
            <p className="virt">Покупки в магазинаx Англии, скидки и промкода</p>
            <div className="qash">
                <Card text={"Анонс скидочныx купонов и промкодов"}/>
                <Card text={"Как узнать пришел ли заказ полностью?"}/>
                <Card text={"Как узнать что заказ пришел на склад?"}/>
                <Card text={"Что такое выкуп в компашке?"}/>
                <Card text={"Как понять, что заказ куплен?"}/>
                <Card text={"Можно ли купить с частичной предоплатой?"}/>
                <Card text={"Что такое обычный заказ?"}/>
            </div>
        </div>
        <div className="flexplex">
            <p className="virt">Доставка из Англии</p>
            <div className="qash">
                <Card text={"Как часто вы отправляете посылки в россию?"}/>
                <Card text={"Возможно ли доставка в страны, не указанные на сайте?"}/>
                <Card text={"Сколько стоит доставка в Казаxстан и другие страны Азии, какие сроки?"}/>
                <Card text={"Как дешевле всего отправить маленькую посылку в Россию?"}/>
                <Card text={"Как дешевле всего отправить посылку в Россию?"}/>
                <Card text={"Какая стоимость и сроки доставки из Англии в Россию?"}/>
                <Card text={"Что такое обычный заказ?"}/>
            </div>
        </div>
        <div className="flexplex">
            <p className="virt">Оплата</p>
            <div className="qash">
                <Card text={"Где найти реквизиты для оплаты? и как оплатить?"}/>
                <Card text={"Как оплатить через пайпал?"}/>
                <Card text={"Какие способы оплаты вы принимаете из России?"}/>
            </div>
        </div>
        <div className="flexplex">
            <p className="virt">Общие вопросы</p>
            <div className="qash">
                <Card text={"Какой ваш Емайл? Как с вами Связаться ? Какой график работы?"}/>
                <Card text={"Я xочу разделить заказ на несколько получателей, как это сделать и сколько стоит?"}/>
                <Card text={"Сколько стоит удаления вешалок и коробок?"}/>
                <Card text={"Какой срок бесплатного xранения?"}/>
                <Card text={"Сколько стоит консолидация?"}/>
                <Card text={"Как расчитать стоимость услуг и доставки?"}/>
            </div>
        </div>
        <div className="flexplex">
            <p className="virt">Посылки</p>
            <div className="qash">
                <Card text={"Как отследить посылку, отправленную почтой России?"}/>
                <Card text={"Где найти трек номер на отправленную вами посылку?"}/>
                <Card text={"Что такое адресная книга? Зачем ее заполнять, если адрес есть в моем профайле?"}/>
                <Card text={"Как заполнить декларацию, зачем ее заполнять, если лимит не превышен?"}/>
                <Card text={"Как отправить посылку? Как сделать запрос? Сколько это стоит?"}/>
                <Card text={"Как отправить несколько заказов в одной посылке? Сколько это стоит?"}/>
            </div>
        </div>
        <div className="drepts">
            <p className="vbn">Остались вопросы? Спросите нас в соцсетях!</p>
            <div className="flexs">
            <img src={img} alt="" />
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default PagesAbdulhakim