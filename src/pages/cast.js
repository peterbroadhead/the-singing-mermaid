import * as React from "react"
import "../components/index.css"
import { Helmet } from 'react-helmet'
import Menu from "../components/menu.js"
import chris from "../images/chris_dobson.png"
import louise from "../images/louise_mellor.png"
// import claire from "../images/claire_pointing.png"
import heidi from "../images/heidi_goldsmith.png"

const CastPage = () => {
  return (    
    <main className="cast">
      <Helmet title="The Singing Mermaid - Meet the Cast" defer={false} description="A play for children based on the orginal book The Singing Mermaid written by Julia Donaldson and illustrated by Lydia Monks."/>            
      <Menu />
      <h1>Meet the Singing Mermaid Cast</h1>
      <section>
        <figure>
          <img src={louise} alt="Louise Mellor Headshot"></img>
          <div>
            <h3>Louise Mellor</h3>
            <p>I trained at the Curious School of Puppetry and I studied Physical Theatre in Italy and Performing Arts at the University of Salford. I have performed in theatres, schools, libraries and forests all around the UK as well as abroad, including Alice in Wonderland, Peter Pan and Robin Hood in Italy and The Jungle Book in China.</p>
            <p>
              <b>What was your favourite story when you were young?</b>
              <br></br>
              The BFG by Roald Dahl. I once dressed up as Sophie for World Book Day!
            </p>
            <p>
              <b>Can you do any circus tricks?</b>
              <br></br>
              I spent some time at a circus school in Turin where I learnt to walk the tight-wire and a couple of moves on the aerial silks. I’m not sure if I’d still be able to do them though, as I haven’t practised since. I can still do a head-stand though - does that count?
            </p>
            <p>
              <b>Tell us a joke!</b>
              <br></br>
              What did the sea say to the mermaid? Nothing, it just waved.
            </p>
          </div>           
        </figure>
        <figure>
          <img src={heidi} alt="Heidi Goldsmith Headshot"></img>
          <div>
            <h3>Heidi Goldsmith</h3>
            <p>               
              I trained at East 15 Acting School and have been puppeteering for the last 6 years. I have been involved in numerous shows including ‘Wow! It’s Night-time’ (Little Angel Theatre), ‘Arbor’ (Smoking Apples Theatre) and ‘The Adventures of Bo Peep’ (Knuckle and Joint). I have just finished a 5 month tour of ‘The Smartest Giant in Town’ (Little Angel Theatre), where we have been lucky enough to receive an Olivier Award nomination for Best Family Show! This is my second time performing in ‘The Singing Mermaid’ and I am full of joy to be returning to Silversands.
            </p>
            <p>          
              <b>What was your favourite story when you were young?</b>
              <br></br>
              Burglar Bill! By Janet and Allan Ahlberg. I loved all their books when I was little.
            </p>
            <p>
              <b>Can you do any circus tricks?</b>
              <br></br>            
              I can juggle!
            </p>
            <p>
              <b>Tell us a joke!</b>
              <br></br>
              I was told to stop pretending to be a flamingo. I had to put my foot down.
            </p>
          </div>                                                                                                                                                                                              
        </figure>
        <figure>
            <img src={chris} alt="Chris Dobson Headshot"></img>
            <div>
              <h3>Chris Dobson</h3>
              <p>I trained at the University of East Anglia and have been having a blast as an actor ever since! I’ve been very lucky to get to play with lots of different puppets during my time in theatre, in particular helping Iggle Piggle find his Blanket in In the Night Garden Live, trying to find a rhyme in Oi Frog and Friends and even going down to the farm with Shaun the Sheep.</p>
              <p>
                <b>What was your favourite story when you were young?</b>
                <br></br>
                Peter Pan, I love adventure, treasure maps and a bit of a sword fight!
              </p>  
              <p>       
                <b>Can you do any circus tricks?</b>
                <br></br>
                Ha - no circus tricks I’m afraid! Just a few balloon animals!
              </p>
              <p>
                <b>Tell us a joke!</b>
                <br></br>
                What did the cheese say when it looked in the mirror? Halloumi!
              </p>
            </div>  
          </figure>            
        {/* <figure>
          <img src={claire} alt="Claire Pointing Headshot"></img>
          <div>
            <h3>Clare Pointing</h3>
            <p>
              I have been performing since 2006 and am now also a Mum to two children. I work as a puppeteer, actor and more recently as a writer too, creating my own solo shows Delphine and With Child. Some of the productions I’ve been in are How to Hide a Lion (Polka Theatre), Red Riding Hood (Norwich Puppet Theatre) and Father Christmas (Lyric Hammersmith/ West Yorkshire Playhouse). I was also in The Magician’s Daughter (Little Angel in association with the RSC).
            </p>
            <p>          
              <b>What was your favourite story when you were young?</b>
              <br></br>
              Ooooh I’m not very good at picking favourites, there were so many but... Sally Sky Diver by Polly Noakes was one.
            </p>
            <p>
              <b>Can you do any circus tricks?</b>
              <br></br>            
              Sadly not, but I would LOVE to and it’s never too late to learn!
            </p>
            <p>
              <b>Tell us a joke!</b>
              <br></br>
              Why don’t clams give to charity? Because they’re shellfish!
            </p>
          </div>                                                                                                                                                                                              
        </figure> */}

        <ul>
          <li><b>Puppeteer</b> Louise Mellor</li>
          <li><b>Puppeteer</b> Chris Dobson</li>
          <li><b>Puppeteer</b> Heidi Goldsmith</li>
          <li><b>Associate Director</b> Oliver Hymans</li>
          <li><b>Stage Manager</b> Lucy Barter</li>
          <li><b>Stage Manager</b> Jack Lawrence</li>
          <li><b>Adapted by</b> Samantha Lane & Barb Jungr</li>
          <li><b>Music and Lyrics by</b>  Barb Jungr</li>
          <li><b>Original production directed by</b>  Samantha Lane</li>
          <li><b>Design by</b> Laura McEwen</li>
          <li><b>Lighting Design by</b>  Sherry Coenen</li>
          <li><b>Puppets by</b> Lyndie Wright</li>
          <li><b>Additional Puppets by</b>  Jan Zalud</li>
        </ul>                    
      </section>




    </main>
  )
}

export default CastPage
