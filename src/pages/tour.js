import * as React from "react"
import "../components/index.css"
import { Helmet } from 'react-helmet'
import Menu from "../components/menu.js"

import visualStory from "../components/Singing Mermaid Visual Story.pdf"


const SongsPage = () => {
  return (    
    <main>
      <Helmet title="The Singing Mermaid - Book Now" defer={false} description="A play for children based on the orginal book The Singing Mermaid written by Julia Donaldson and illustrated by Lydia Monks."/>            
      <Menu />
      <h1>Book your ticket for The Singing Mermaid</h1>
      <h3>If you’re coming to a Relaxed Performance or would like to know more about the story and the production, <a href={visualStory} target="_blank" rel="noreferrer"> click here.</a></h3>
      <ul className="shows">
        <li>
          <a href={"https://www.artsdepot.co.uk/event/the-singing-mermaid/"} target="_blank" rel="noreferrer">
          <h3>London N12</h3>artsdepot<br></br><span>30 March to 1 April</span>
          </a>
        </li> 
        <li>
          <a href={"https://greenwichtheatre.org.uk/"} target="_blank" rel="noreferrer">
          <h3>London SE10</h3>Greenwich Theatre<br></br><span>3 & 4 April</span>
          </a>
        </li>
        <li>
          <a href={"https://thegulbenkian.co.uk/events/the-singing-mermaid/"} target="_blank" rel="noreferrer">
          <h3>Canterbury</h3>The Gulbenkian<br></br><span>9 to 10 April</span>
          </a>
        </li>
        <li>
          <a href={"https://www.theatreroyalwinchester.co.uk/whats-on/singing-mermaid"} target="_blank" rel="noreferrer">
          <h3>Winchester</h3>Theatre Royal<br></br><span>13 to 14 April</span>
          </a>
        </li> 
      </ul>
    </main>
  )
}

export default SongsPage
