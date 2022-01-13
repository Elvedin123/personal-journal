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
  }, [])
  return (
    <div>
      <h1>Entry</h1>
      <div>
        <h2>{entry.fields?.title}</h2>
        <h3>{entry.fields?.topic}</h3>
        <p>{entry.fields?.info}</p>
        <time>{entry.fields?.date}</time>
      </div>
      <Deletebutton />
    </div>
  )
}
