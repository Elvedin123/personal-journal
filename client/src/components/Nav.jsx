import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='navbar'>
      <Link className='title' to="/">
        <h1 >myJournal</h1>
      </Link>

      <div className='add-button'><h6 className='button-title'>New Entry</h6><Link to="/new"><button>+</button></Link></div>

    </div>
  )
}
