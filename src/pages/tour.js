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
          Nottingham - Lakeside Arts <br></br>9 to 31 December 2022 <br></br>Tickets selling fast!
          </a>
        </li>
        <li>
          <a href={"https://www.artsdepot.co.uk/"} target="_blank" rel="noreferrer">
          London N12 - artsdepot <br></br>12 to 14 February 2023 <br></br>Tickets now on sale!
          </a>
        </li> 
        <li>
          <a href={"https://watersidearts.org/whats-on/3221-the-singing-mermaid/"} target="_blank" rel="noreferrer">
          Manchester - Waterside Arts <br></br>17 to 19 February 2023 <br></br>Tickets on sale now!
          </a>
        </li> 
        <li>
          <a href={"https://northernstage.co.uk/"} target="_blank" rel="noreferrer">
          Newcastle on Tyne - Northern Stage<br></br>21 to 23 Feb 2023 <br></br>Tickets on sale now!
          </a>
        </li> 
        <li>
          <a href={"https://www.polkatheatre.com"} target="_blank" rel="noreferrer">
          London SW19 - Polka Theatre<br></br>1 to 8 April 2023 <br></br>On sale now!
          </a>
        </li> 
        <li>
          <a href={"https://www.anvilarts.org.uk"} target="_blank" rel="noreferrer">
          Basingstoke - Haymarket Theatre<br></br>12 & 13 April 2023 <br></br>Tickets on sale soon!
          </a>
        </li> 

        <li>
          <a href={"https://www.theatrclwyd.com/"} target="_blank" rel="noreferrer">
          Mold - Theatr Clwyd<br></br>15 & 16 April 2023 <br></br>On sale now!
          </a>
        </li> 
        <li>
          <a href={"https://www.theatreroyal.org"} target="_blank" rel="noreferrer">
          Bury St Edmunds – Theatre Royal<br></br>2 & 3 June 2023 <br></br>On sale now! 
          </a>
        </li>                                               
        <li>Coming to a Theatre near you soon...</li>
      </ul>
    </main>
  )
}

export default SongsPage
