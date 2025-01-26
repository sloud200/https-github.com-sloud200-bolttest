import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data'

const Profile = () => {
  const { userId } = useParams()
  const profile = data.profiles.find(p => p.id === parseInt(userId))
  const userSkateboards = data.skateboards.filter(s => profile.listings.includes(s.id))

  return (
    <div className="profile">
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
      <h2>Your Listings</h2>
      {userSkateboards.length > 0 ? (
        <ul className="skateboard-list">
          {userSkateboards.map(skateboard => (
            <li key={skateboard.id} className="skateboard-item">
              <h3>
                <a href={`/skateboard/${skateboard.id}`} className="skateboard-link">{skateboard.name}</a>
              </h3>
              <p>Price: ${skateboard.price}</p>
              <img src={skateboard.picture} alt={skateboard.name} style={{ width: '150px' }} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No listings available.</p>
      )}
    </div>
  )
}

export default Profile
