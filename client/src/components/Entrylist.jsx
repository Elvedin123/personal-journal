
import { useState, useEffect } from 'react'
import api from '../services/apiConfig.js/index.js'
import { Link } from 'react-router-dom'

export default function Entrylist() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const fetchEntry = async () => {
      const res = await api.get()
      console.log(res.data.records)
      setEntries(res.data.records)
    }
    fetchEntry()
  }, [])

  return (
    <div className='entries'>
      <h1>Home</h1>
      <div className='entry-container'>
        {entries.map((entry) => {
          return (
            <li key={entry.id}>
              <Link className='card' to={`/entry/${entry.id}`}>
                <div className='entry-card'>
                  <h1 className='card-title'>{entry.fields.title}</h1>
                  <br></br>
                  <br></br>
                  <time>{entry.fields.date}</time>
                </div>
              </Link>
            </li>
          )
        })}
      </div>

    </div>
  )
}
