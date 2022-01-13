import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import api from '../services/apiConfig.js'
import { useParams } from 'react-router-dom'


export default function Entrydetail() {
  const [entry, setEntry] = useState({})
  const { id } = useParams()
  useEffect(() => {
    const fetchEntry = async () => {
      const res = await api.get(`/${id}`)
      setEntry(res.data)
      console.log(res.date)
    }
    fetchEntry()
  }, [input])
  return (
    <div>

    </div>
  )
}
