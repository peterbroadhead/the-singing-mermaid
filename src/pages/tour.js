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
          <a href={"https://www.radlettcentre.co.uk/What-s-On/Children/Singing-Mermaid"} target="_blank" rel="noreferrer">
          <h3>Radlett</h3> The Radlett Centre<br></br><span>Tues 27 -Wed 28 October 2026</span>
          </a>
        </li> 
        <li>
          <a href={"https://www.mayflower.org.uk/whats-on/the-singing-mermaid-2026/"} target="_blank" rel="noreferrer">
          <h3>Southampton</h3> Mayflower Studios<br></br><span>Fri 30 -Sat 31 October 2026</span>
          </a>
        </li> 
      </ul>
    </main>
  )
}

export default SongsPage
