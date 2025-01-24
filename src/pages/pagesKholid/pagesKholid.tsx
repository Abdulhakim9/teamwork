import React from 'react'
import "./pagesKholid.scss"
import Card from './card'

const PagesKholid = () => {
  return (
    <div>
      <div className="top">
          <p className='text'>Главная  /  Блог</p>
          <h1 className='text2'>Блог</h1>
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default PagesKholid