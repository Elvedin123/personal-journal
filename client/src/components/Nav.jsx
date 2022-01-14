import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='navbar'>
      <Link className='title' to="/">
        <h1 >myJournal</h1>
      </Link>

      <Link to="/new"><button>+</button></Link>

    </div>
  )
}
