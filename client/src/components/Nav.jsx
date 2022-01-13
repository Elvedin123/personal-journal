import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='navbar'>
      <Link to="/">
        <h1>myJournal</h1>
      </Link>

      <Link to="/new">New</Link>

    </div>
  )
}
