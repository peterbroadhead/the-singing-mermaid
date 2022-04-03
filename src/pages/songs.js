import * as React from "react"
import "../components/index.css"
import { Helmet } from 'react-helmet'
import Menu from "../components/menu.js"


const SongsPage = () => {
  return (    
    <main>
      <Helmet title="The Singing Mermaid - Listen to the Songs" defer={false} description="A play for children based on the orginal book The Singing Mermaid written by Julia Donaldson and illustrated by Lydia Monks."/>            
      <Menu />
      <h1>Listen to the music and songs by Barb Jungr</h1>  
      <iframe title="song-ss" src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/834638767&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'></iframe>
      <iframe title="song-ycdiiyt" src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/834638848&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'></iframe>
      <iframe title="song-mimrd" src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/834639088&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'></iframe>
      <iframe title="song-cf" src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/834639172&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'></iframe>
      <iframe title="song-hilts" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/834639517&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </main>
  )
}

export default SongsPage
