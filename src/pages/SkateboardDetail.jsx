import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../data'

const SkateboardDetail = () => {
  const { skateboardId } = useParams()
  const skateboard = data.skateboards.find(s => s.id === parseInt(skateboardId))
  const owner = data.profiles.find(p => p.listings.includes(parseInt(skateboardId)))

  return (
    <div className="skateboard-detail">
      <h1>{skateboard.name}</h1>
      <img src={skateboard.picture} alt={skateboard.name} style={{ width: '300px', marginBottom: '20px' }} />
      <p>Price: ${skateboard.price}</p>
      <div className="owner-info">
        <h2>Owner Information</h2>
        <h3>{owner.name}</h3>
        <p>{owner.bio}</p>
        <Link to={`/profile/${owner.id}`} className="profile-link">View Profile</Link>
        <button className="contact-button">Contact Owner</button>
      </div>
    </div>
  )
}

export default SkateboardDetail
