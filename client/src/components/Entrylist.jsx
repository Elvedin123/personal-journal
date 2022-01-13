
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
    <div>
      <h1>Home</h1>
      <div>
        {entries.map((entry) => {
          return (
            <li className='entry-container' key={entry.id}>
              <Link className='entry-card' to={`/entry/${entry.id}`}>
                <div>
                  <h1>{entry.fields.title}</h1>
                  <h3>{entry.fields.topic}</h3>
                  <p>{entry.fields.info}</p>
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
