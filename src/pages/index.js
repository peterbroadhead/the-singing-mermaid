import * as React from "react"
import Mermaid from "../images/the singing mermaid with stars.png"
import "../components/index.css"
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Gallery } from "gatsby-theme-gallery"

const reviews = [
  {
    source: "Time Out",
    stars: "four",
    url: "",
    excerptOne:
      "‘It’s a lovely piece of theatre that’ll leave its audience in a trance, while possessing enough loopy visual brio to ensure adults have a swimming time too.’",
    excerptTwo:
      "‘brings the world illustrated by Lydia Monks to gloriously barmy life.’",
  },
  {
    source: "The Times",
    stars: "four",
    url: "",
    excerptOne:
      "‘Here’s a lovely little show that makes a big splash. it thrills and charms, effortlessly transporting its audience from the depths of the ocean to dizzying high-wire feats in a circus big top’",
    excerptTwo:
      "‘Exquisitely designed puppets manipulated with captivating skill transform Julia Donaldson’s book into an entrancing stage show’",
  },
  {
    source: "The Guardian",
    stars: "none",
    url: "",
    excerptOne:
      "‘Bad puns, circus tricks and goggle-eyed jellyfish abound in this smart adaptation of the popular picture book’",
    excerptTwo:
      "‘At the end, 4 year old Hilda is still laughing about an opening gag about how to do a handstand. This is a fun, warm-hearted adventure that may leave you humming its songs – and even wanting to hug a seagull. ",
  },
  {
    source: "Musical Theatre Review",
    stars: "four",
    url: "",
    excerptOne:
      "‘As entertainment for very young children, musical shows don’t get much better than this.’",
  },
  {
    source: "Edinburgh Tourist",
    stars: "five",
    url: "",
    excerptOne:
      "‘Kids and grown ups alike had a great time…It ran at 55 minutes which was just right. Absolutely recommended for families with young children.’",
  },
]
const IndexPage = () => {
  return (    
    <main>
      <Helmet title="The Singing Mermaid - A Watershed Production" defer={false} description="A play for children based on the orginal book The Singing Mermaid written by Julia Donaldson and illustrated by Lydia Monks."/>            
      <h1>
        <span>The Singing Mermaid - A Watershed Production</span>
        <img src={Mermaid} alt='The Singing Mermaid'></img>
      </h1>
      <p class={"big-quote"}>
        Did you ever go to Silversands
        <br></br>
        On a sunny summer’s day?
        <br></br>
        Then perhaps you saw the mermaid
        <br></br>
        Who sang in the deep blue bay
      </p>
      <p>
        One day the singing mermaid is tempted away from all of her sea-creature friends to join a travelling circus. The audiences love to hear her sing but the poor mermaid was tricked! Instead of the swimming pool she was promised, she is kept in a small fish tank by the wicked circus ringmaster, Sam Sly. She is very unhappy, and longs to go back to Silversands bay, but will she ever escape? Who is there to help her?
      </p>
      <div class={"mermaid-gallery"}>
        <Gallery />
      </div>
      <div class={"show-info"}>        
        <p>  
          With beautiful puppetry and performance, and music and songs by Barb Jungr, Watershed Productions are proud to present this Little Angel Theatre and Royal and Derngate production. 
        </p>
        <p> 
          Age recommendation 3-8 yrs. 
        </p>
        <p> 
          Duration 55 minutes. No interval.
        </p>
        <a href={"https://polkatheatre.com/event/the-singing-mermaid/"}>
          Book Now at the Polka Theatre
        </a>
        <a href={"https://www.littleangeltheatre.com/whats-on/the-singing-mermaid/"}>
          Book Now at the Little Angel Theatre
        </a>
      </div>
      <ul>
        {reviews.map(review => (
          <li key={review.url}>
            <span class={review.stars}>
              <FontAwesomeIcon icon={faStar} size="1x" />
              <FontAwesomeIcon icon={faStar} size="1x" />
              <FontAwesomeIcon icon={faStar} size="1x" />
              <FontAwesomeIcon icon={faStar} size="1x" />
              <FontAwesomeIcon icon={faStar} size="1x" />
              <a href={`${review.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}>
                {review.source}
              </a>              
              <p>{review.excerptOne}</p>
              <p>{review.excerptTwo}</p>
            </span>
          </li>
        ))}
      </ul>
      <article>
        <ul>

        </ul>
      </article>
    </main>
  )
}

export default IndexPage
