import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar" >
            <h1>business ideas</h1>
            <div className="links">
                <Link to="/" style={{
                    backgroundColor:"#ff9800",
                    color:"#ffff",
                    borderRadius:"8px"
                }}>Home</Link>
                <Link to="/addidea" style={{
                    backgroundColor:"#03a9f4",
                    color:"#ffff",
                    borderRadius:"8px"
                }}>New Idea</Link>
            </div>
            
        </div>
    )
}

export default Navbar
