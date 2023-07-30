import * as React from "react"
import "../components/index.css"
import { Helmet } from 'react-helmet'
import Menu from "../components/menu.js"

const SongsPage = () => {
  return (    
    <main>
      <Helmet title="The Singing Mermaid - Book Now" defer={false} description="A play for children based on the orginal book The Singing Mermaid written by Julia Donaldson and illustrated by Lydia Monks."/>            
      <Menu />
      <h1>Book your ticket for The Singing Mermaid</h1>              
      <ul className="shows">
        <li>
          <a href={"https://www.storyhouse.com/whats-on/?event-search=the+singing+mermaid"} target="_blank" rel="noreferrer">
          <h3>Chester</h3>Storyhouse<br></br><span>21 to 22 Oct</span>
          </a>
        </li>  
        <li>
          <a href={"https://homemcr.org/production/the-singing-mermaid/"} target="_blank" rel="noreferrer">
          <h3>Manchester</h3>HOME<br></br><span>24 to 26 Oct</span>
          </a>
        </li>  
        <li>
          <a href={"https://www.lichfieldgarrick.com/whats-on/family/the-singing-mermaid/3183"} target="_blank" rel="noreferrer">
          <h3>Lichfield</h3>Garrick Theatre<br></br><span>31 Oct to 1 Nov</span>
          </a>
        </li>                                               
        <li>Coming to a Theatre near you soon...</li>
      </ul>
    </main>
  )
}

export default SongsPage
