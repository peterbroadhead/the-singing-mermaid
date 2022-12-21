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
          <a href={"https://www.lakesidearts.org.uk/"} target="_blank" rel="noreferrer">
          <h3>Nottingham</h3>Lakeside Arts <br></br><span>9 to 31 December 2022</span><br></br>Tickets selling fast!
          </a>
        </li>
        <li>
          <a href={"https://www.artsdepot.co.uk/"} target="_blank" rel="noreferrer">
          <h3>London N12</h3>artsdepot<br></br><span>12 to 14 February</span>
          </a>
        </li> 
        <li>
          <a href={"https://northernstage.co.uk/"} target="_blank" rel="noreferrer">
          <h3>Newcastle on Tyne</h3> Northern Stage<br></br><span>21 to 23 Feb</span>
          </a>
        </li> 
        <li>
          <a href={"https://www.polkatheatre.com"} target="_blank" rel="noreferrer">
          <h3>London SW19</h3>Polka Theatre<br></br><span>1 to 8 April</span>
          </a>
        </li> 
        <li>
          <a href={"https://www.anvilarts.org.uk"} target="_blank" rel="noreferrer">
          <h3>Basingstoke</h3>Haymarket Theatre<br></br><span>12 & 13 April</span>
          </a>
        </li> 
        <li>
          <a href={"https://www.theatrclwyd.com/"} target="_blank" rel="noreferrer">
          <h3>Mold</h3>Theatr Clwyd<br></br><span>15 & 16 April</span>
          </a>
        </li> 
        <li>
          <a href={"https://www.birmingham-rep.co.uk/"} target="_blank" rel="noreferrer">
          <h3>Birmingham</h3> Birmingham Rep<br></br><span>27 & 28 May</span>
          </a>
        </li>  
        <li>
          <a href={"https://dukeslancaster.org/"} target="_blank" rel="noreferrer">
          <h3>Lancaster</h3>The Dukes<br></br><span>30 & 31 May</span>
          </a>
        </li>   
        <li>
          <a href={"https://www.theatreroyal.org"} target="_blank" rel="noreferrer">
          <h3>Bury St Edmunds</h3>Theatre Royal<br></br><span>2 & 3 June</span> 
          </a>
        </li>   
        <li>
          <a href={"https://www.theatreroyal.org"} target="_blank" rel="noreferrer">
          <h3>Manchester</h3>HOME<br></br><span>24 to 26 Oct</span>
          </a>
        </li>                                               
        <li>Coming to a Theatre near you soon...</li>
      </ul>
    </main>
  )
}

export default SongsPage
