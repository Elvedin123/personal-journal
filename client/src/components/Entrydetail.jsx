import React from 'react'
import { useEffect, useState } from "react"
// import { useParams } from 'react-router-dom'
import api from '../services/apiConfig.js/index.js'
import { useParams } from 'react-router-dom'
import Deletebutton from './Deletebutton.jsx'

export default function Entrydetail() {
  const [entry, setEntry] = useState({})
  const { id } = useParams()
  useEffect(() => {
    const fetchEntry = async () => {
      const res = await api.get(`/${id}`)
      setEntry(res.data)
      console.log(res.data)
    }
    fetchEntry()
  }, [id])
  return (
    <>
      <h1 className='entry-title'>Entry</h1>

      <div className='main-detail'>
        {/* <div className='detail-container'> */}

        <div className='detail-card'>
          <h2 className='detail'>{entry.fields?.title}</h2>
          <h3 className='detail-topic'>Topic: {entry.fields?.topic}</h3>
          <p className='p'>{entry.fields?.info}</p>
          <time>{entry.fields?.date.split('T')[0]}</time>
          <br></br>
          <Deletebutton entry={entry} />
        </div>

        {/* </div> */}
      </div>
    </>
  )
}
