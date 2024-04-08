import React from 'react'
import "./css/header.css"

function Header(props) {
  return (
    <div>
      <header>
        <p>{props.name}</p>
      </header>
    </div>
  )
}


export default Header ;