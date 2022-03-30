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
      <ul>
        <li>
          <a href={"https://www.littleangeltheatre.com/whats-on/the-singing-mermaid/"} target="_blank" rel="noreferrer">
            London - Little Angel Theatre<br></br>29 Mar–24 Apr 2022
          </a>
        </li>
        <li>Coming to a Theatre near you soon...</li>
      </ul>
    </main>
  )
}

export default SongsPage
