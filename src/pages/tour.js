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
          <a href={"https://polkatheatre.com/event/the-singing-mermaid-2023/"} target="_blank" rel="noreferrer">
          <h3>London SW19</h3>Polka Theatre<br></br><span>31 March to 8 April</span>
          </a>
        </li> 
        <li>
          <a href={"https://www.anvilarts.org.uk/whats-on/event/the-singing-mermaid"} target="_blank" rel="noreferrer">
          <h3>Basingstoke</h3>The Haymarket<br></br><span>12 & 13 April</span>
          </a>
        </li> 
        <li>
          <a href={"https://www.theatrclwyd.com/event/the-singing-mermaid"} target="_blank" rel="noreferrer">
          <h3>Mold</h3>Theatr Clwyd<br></br><span>15 & 16 April/Ebrill</span>
          </a>
        </li> 
        <li>
          <a href={"https://www.birmingham-rep.co.uk/whats-on/the-singing-mermaid/"} target="_blank" rel="noreferrer">
          <h3>Birmingham</h3> Birmingham Rep<br></br><span>27 & 28 May</span>
          </a>
        </li>  
        <li>
          <a href={"https://dukeslancaster.org/whats-on/theatre/the-singing-mermaid"} target="_blank" rel="noreferrer">
          <h3>Lancaster</h3>The Dukes<br></br><span>30 & 31 May</span>
          </a>
        </li>   
        <li> 
          <a href={"https://theatreroyal.org/shows/the-singing-mermaid/"} target="_blank" rel="noreferrer">
          <h3>Bury St Edmunds</h3>Theatre Royal<br></br><span>2 & 3 June</span> 
          </a>
        </li>   
        <li>
          <a href={"https://homemcr.org/production/the-singing-mermaid/"} target="_blank" rel="noreferrer">
          <h3>Manchester</h3>HOME<br></br><span>24 to 26 Oct</span>
          </a>
        </li>                                               
        <li>Coming to a Theatre near you soon...</li>
      </ul>
    </main>
  )
}

export default SongsPage
