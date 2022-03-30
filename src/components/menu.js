import React from "react"
import { Link } from "gatsby"

export default function Menu() {
    return (
    <div>
        <div className="bg"></div>
        <menu>
            <li><Link to="/" className="main_links mobile">Home</Link> </li>
            <li><Link to="/tour/" className="main_links mobile">Book Now</Link> </li>
            <li><Link to="/what the audience thought/" className="main_links">Audience reaction</Link> </li>
            <li><Link to="/songs/" className="main_links">Listen to the songs</Link> </li>
            <li><Link to="/industry/" className="main_links">Industry</Link></li>
        </menu>
    </div>
    )
  }