import * as React from "react"
import Mermaid from "../images/the singing mermaid with stars wide.png"
import "../components/index.css"
import { Helmet } from 'react-helmet'
// import { Gallery } from "gatsby-theme-gallery"
import Menu from "../components/menu.js"
import Reviews from "../components/reviews.js"
import { Link } from "gatsby"
import Mermaid1 from "../images/latest/1 Singing Mermaid-Little Angel Theatre.jpg"
import Mermaid2 from "../images/latest/2 Singing Mermaid-Little Angel Theatre.jpg"
import Mermaid3 from "../images/latest/3 Singing Mermaid-Little Angel Theatre.jpg"
//import Mermaid4 from "../images/latest/Singing Mermaid-Little Angel Theatre.jpg"


const IndexPage = () => {
  return (    
    <main>
      <Helmet title="The Singing Mermaid - A Watershed Production" defer={false} description="A play for children based on the orginal book The Singing Mermaid written by Julia Donaldson and illustrated by Lydia Monks."/>            
      <Menu />
      <h1 className="home_h1">Watershed Productions present the Little Angel Theatre and Royal and Derngate production of
        <span>The Singing Mermaid</span>
        <img src={Mermaid} alt='The Singing Mermaid'></img>
      </h1>
      <h2>The Guardian : ‘This is a fun warm-hearted adventure that will leave you humming its songs and wanting to hug a seagull’</h2>
      <iframe width="800" height="400" src="https://www.youtube.com/embed/1EanZhXD47M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
      <p class={"big-quote"}>
        Did you ever go to Silversands
        <br></br>
        On a sunny summer’s day?
        <br></br>
        Then perhaps you saw the mermaid
        <br></br>
        Who sang in the deep blue bay
      </p>
      <img src={Mermaid1} alt='The Singing Mermaid'></img>
      <p>
        One day the singing mermaid is tempted away from all of her sea-creature friends to join a travelling circus. The audiences love to hear her sing but the poor mermaid was tricked! Instead of the swimming pool she was promised, she is kept in a small fish tank by the wicked circus ringmaster, Sam Sly. She is very unhappy, and longs to go back to Silversands bay, but will she ever escape? Who is there to help her?
      </p>
      <p>Age recommended 3 - 8 Years</p>
      <img src={Mermaid2} alt='The Singing Mermaid'></img>
      {/* <div class={"mermaid-gallery"}>
        <Gallery />
      </div>       */}
      <Reviews />
      <img src={Mermaid3} alt='The Singing Mermaid'></img>
      <div class="show-info">        
        <p>  
        Adapted from the book by Samantha Lane and Barb Jungr, with music and songs by Barb Jungr, and puppets by Lyndie Wright. 
        </p>
        <p> 
          Age recommendation 3-8 yrs. 
        </p>
        <p> 
          Duration 55 minutes. No interval.
        </p>
        <Link href="/tour">
          Book Now       
        </Link>
        <a href={"https://www.littleangeltheatre.com/whats-on/the-singing-mermaid/"}>
          Book Now at the Little Angel Theatre
        </a>
      </div>
    </main>
  )
}

export default IndexPage
