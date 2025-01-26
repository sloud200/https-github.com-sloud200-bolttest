import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

const FindMySkateboard = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredSkateboards, setFilteredSkateboards] = useState(data.skateboards)

  const handleSearchChange = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    const filtered = data.skateboards.filter(s => s.name.toLowerCase().includes(term.toLowerCase()))
    setFilteredSkateboards(filtered)
  }

  return (
    <div className="find-skateboard">
      <h1>Find my Skateboard</h1>
      <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearchChange} />
      <ul className="skateboard-list">
        {filteredSkateboards.map(skateboard => (
          <li key={skateboard.id} className="skateboard-item">
            <h3>
              <a href={`/skateboard/${skateboard.id}`} className="skateboard-link">{skateboard.name}</a>
            </h3>
            <p>Price: ${skateboard.price}</p>
            <img src={skateboard.picture} alt={skateboard.name} style={{ width: '150px' }} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FindMySkateboard
