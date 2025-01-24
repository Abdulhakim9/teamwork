import React from 'react'
import "./pagesKholid.scss"
import img from "./images/image 1 (4).png"

const Card = () => {
    return (
        <>
            <div className="card">
                  <img className='img' src={img} alt="" />
                  <div className="divCard">
                    <h3>Интернет-магазин Urban Outfitters в UK: обзор</h3>
                    <div className="divEndCard">
                        <p>22.10.2021</p>
                        <p>Читать: 8 минут</p>
                    </div>
                  </div>
            </div>
        </>
    )
}

export default Card
