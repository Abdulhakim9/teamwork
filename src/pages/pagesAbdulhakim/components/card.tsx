import React from 'react'
import  '../pagesAbdulhakim.scss'
import img from "../pictures/Vector 86.png"

const Card = ({text}) => {
  return (
    <div>
        <div className="stile">
            <p className="textpext">{text}</p>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Card