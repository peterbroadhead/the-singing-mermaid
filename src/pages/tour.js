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
          <a href={"https://www.lakesidearts.org.uk/"} target="_blank" rel="noreferrer">
          Nottingham - Lakeside Arts <br></br>9 to 31 December 2022 <br></br>Tickets on sale from 13th July!
          </a>
        </li>
        <li>
          <a href={"www.watersidearts.org"} target="_blank" rel="noreferrer">
          Manchester - Waterside Arts <br></br>17 to 19 February 2023 <br></br>Tickets on sale now!
          </a>
        </li>                                                    
        <li>Coming to a Theatre near you soon...</li>
      </ul>
    </main>
  )
}

export default SongsPage
