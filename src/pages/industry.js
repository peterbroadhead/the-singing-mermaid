import * as React from "react"
import "../components/index.css"
import { Helmet } from 'react-helmet'
import Menu from "../components/menu.js"


const IndustryPage = () => {
  return (    
    <main>
      <Helmet title="The Singing Mermaid - Industry Information" defer={false} description="A play for children based on the orginal book The Singing Mermaid written by Julia Donaldson and illustrated by Lydia Monks."/>            
      <Menu />
      <h1>Industry Details</h1>  
      <video width="1000" height="500" controls>
        <source src="https://watershedtheatre.com/videos/The%20Singing%20Mermaid%20W%20Titles.mp4" type="video/mp4"></source>
      </video>
    </main>
  )
}

export default IndustryPage
