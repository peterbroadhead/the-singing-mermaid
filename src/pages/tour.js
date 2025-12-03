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
          <a href={"https://artsdepot.co.uk/event/the-singing-mermaid/"} target="_blank" rel="noreferrer">
          <h3>North Finchley</h3> artsdepot<br></br><span>Mon 16 - Tues 17 Feb 2026</span>
          </a>
        </li> 
        <li>
          <a href={"https://redgravetheatre.com/event/2026/02/the-singing-mermaid/2275/"} target="_blank" rel="noreferrer">
          <h3>Bristol</h3> Redgrave Theatre<br></br><span>Sat 21 - Sun 22 Feb 2026</span>
          </a>
        </li> 
        <li>
          <a href={"https://redgravetheatre.com/event/2026/02/the-singing-mermaid/2275/"} target="_blank" rel="noreferrer">
          <h3>Manchester</h3> Home<br></br><span>Sat 23 - Sun 24 May 2026</span>
          </a>
        </li> 
        <li>
          <a href={"https://redgravetheatre.com/event/2026/02/the-singing-mermaid/2275/"} target="_blank" rel="noreferrer">
          <h3>Durham</h3> Gala Theatre<br></br><span>Wed 27 Thu - 28 May 2026</span>
          </a>
        </li> 
        <li>
          <a href={"https://thegulbenkian.co.uk/events/the-singing-mermaid-2/"} target="_blank" rel="noreferrer">
          <h3>Canterbury</h3> Gulbenkian Theatre<br></br><span>Sat 30 - Sun 31 May</span>
          </a>
        </li>   
      </ul>
    </main>
  )
}

export default SongsPage
