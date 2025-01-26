import React, { useState } from 'react'
import data from '../data'

const Listings = () => {
  const [newSkateboard, setNewSkateboard] = useState({ name: '', price: '', picture: '' })
  const [skateboardsList, setSkateboardsList] = useState(data.skateboards)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewSkateboard({ ...newSkateboard, [name]: value })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setNewSkateboard({ ...newSkateboard, picture: file })
  }

  const addSkateboard = (e) => {
    e.preventDefault()
    const skateboard = {
      id: skateboardsList.length + 1,
      name: newSkateboard.name,
      price: newSkateboard.price,
      picture: URL.createObjectURL(newSkateboard.picture)
    }
    setSkateboardsList([...skateboardsList, skateboard])
    setNewSkateboard({ name: '', price: '', picture: '' })
  }

  return (
    <div className="listings">
      <h1>List Your Skateboard</h1>
      <form onSubmit={addSkateboard}>
        <label>
          Name:
          <input type="text" name="name" value={newSkateboard.name} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" step="0.01" value={newSkateboard.price} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Picture:
          <input type="file" name="picture" accept="image/*" onChange={handleFileChange} required />
        </label>
        <br />
        <button type="submit">List Skateboard</button>
      </form>
      <h2>Available Skateboards</h2>
      <ul>
        {skateboardsList.map(skateboard => (
          <li key={skateboard.id} className="skateboard-item">
            <h3>{skateboard.name}</h3>
            <p>Price: ${skateboard.price}</p>
            <img src={skateboard.picture} alt={skateboard.name} style={{ width: '150px' }} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Listings
