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
          <a href={"https://www.yvonne-arnaud.co.uk/whats-on/the-singing-mermaid"} target="_blank" rel="noreferrer">
          <h3>Millbrook, Guildford GU1 3UX</h3> Yvonne Arnaud Theatre<br></br><span>20 Aug - Sun 24 Aug 2025</span>
          </a>
        </li> 
        <li>
          <a href={"https://queens-theatre.co.uk/whatson/the-singing-mermaid/"} target="_blank" rel="noreferrer">
          <h3>Queen's Theatre Hornchurch</h3>Little Angel Theatre<br></br><span>28 - 30 Aug 2025</span>
          </a>
        </li> 
      </ul>
    </main>
  )
}

export default SongsPage
