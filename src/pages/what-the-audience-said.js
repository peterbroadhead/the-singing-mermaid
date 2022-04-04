import * as React from "react"
import "../components/index.css"
import { Helmet } from 'react-helmet'
import Menu from "../components/menu.js"

const SongsPage = () => {
  return (    
    <main>
      <Helmet title="The Singing Mermaid - What the audience thought" defer={false} description="A play for children based on the orginal book The Singing Mermaid written by Julia Donaldson and illustrated by Lydia Monks."/>            
      <Menu />
      <blockquote>
        <span style={{color:"#e05a90"}}>"Mesmerised"</span>
        <span style={{color:"#87ccdd"}}>"Tremendous"</span>
        <span style={{color:"#f29142"}}>"Amazing"</span>
        <span style={{color:"#ffd804"}}>"Fabulous"</span>
        <span style={{color:"#f7bca6"}}>"Magical"</span>
        <span style={{color:""}}>"Captivated"</span>
        <span style={{color:"#75b75c"}}>"Brilliant"</span>
      </blockquote>      
      <iframe height="500" src="https://www.youtube.com/embed/q8sPF-SKprs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </main>
  )
}

export default SongsPage
