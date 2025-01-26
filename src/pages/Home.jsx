import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Skateboard Rental Platform</h1>
      <p>Find the perfect skateboard for your next ride!</p>
      <div className="navigation">
        <Link to="/list-my-skateboards" className="nav-link">List my Skateboards</Link>
        <Link to="/find-my-skateboard" className="nav-link">Find my Skateboard</Link>
      </div>
    </div>
  )
}

export default Home
