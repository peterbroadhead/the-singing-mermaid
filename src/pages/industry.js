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
      <p>More details coming soon...</p>
    </main>
  )
}

export default IndustryPage
