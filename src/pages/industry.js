import * as React from "react"
import "../components/index.css"
import { Helmet } from 'react-helmet'
import Menu from "../components/menu.js"
import Groundplan from "../images/groundplan.jpg"



const IndustryPage = () => {
  return (    
    <main>
      <Helmet title="The Singing Mermaid - Industry Information" defer={false} description="A play for children based on the orginal book The Singing Mermaid written by Julia Donaldson and illustrated by Lydia Monks."/>            
      <Menu />
      <section>
        <h1>On this page: About the producers, archive video of the production, tech spec, ground plan.</h1> 
        <h4>About Watershed Productions</h4>
        <p>Watershed Productions is an independent theatre productions company specialising in great theatre for children and families.  We’ve toured to theatres and arts centres across the UK for 25 years and, after a pause during the worst of the covid pandemic, we’re delighted to be back on the road again.</p>
        <p>Our past productions include <b>Charlie and Lola’s Extremely New Play</b> and <b>Charlie and Lola’s Best Bestest Play</b>, John Godber’s stage adaptation of <b>Horrid Henry -  Live and Horrid!</b>, classic children’s books <b>Charlotte’s Web</b>, <b>Winnie the Witch</b>, and <b>The Borrowers</b> and stage adaptations of several novels by Jacqueline Wilson, including <b>Double Act</b>, <b>Secrets</b>, <b>The Suitcase Kid</b>, <b>Midnight</b> and <b>Bad Girls</b>.</p>
        <p><b>Chris Wallis</b> was, many years ago, Artistic Director of the Unicorn Theatre for Children.  He moved from theatre to radio and, with fellow producer Jill Waters, made highly successful readings and drama for BBC Radio 4 whilst keeping his love of theatre alive with Watershed Productions.  <b>Elizabeth Jones</b> was Chief Executive of York Theatre Royal before starting a freelance career which has involved her working with Wycombe Swan, Oldham Coliseum, Theatre by the Lake in Keswick, Basingstoke Haymarket and many others.</p>
        <p>The video below is an archive recording from the production at Sheffield Crucible studio. It is for industry reference only.</p>
        <video width="1000" height="500" controls>
        <source src="https://watershedtheatre.com/videos/The%20Singing%20Mermaid%20W%20Titles.mp4" type="video/mp4"></source>
      </video>
        <h3>THE SINGING MERMAID – TECH SPEC 4th April 22.</h3>
        <p>We are in the process of adapting the production to make it easier to tour. The time we need in each
        venue will reduce but we may need an additional session (evening of the get-in day) for a tech run,
        depending on cast changes. At present, we expect to need 3 people (plus our SM) for the get-in &amp; fit-up.
        We will need to discuss with you / your programme manager how many people we need for different times
        and whether they are able to work across departments.</p>
        <h3>Staging</h3>
        <ul>
          <li>The show needs a playing area 6m wide by 5m deep by 3.5m high. The ground plan is being redrawn.</li>
          <li>Flying is not required.</li> 
          <li><img src={Groundplan} style={{width:"100%"}} alt='The Singing Mermaid'></img></li>
        </ul>
        <h3>Personnel</h3>
        <ul>
          <li>We will bring an SM and a Re-lighter.</li>
          <li>There is a cast of 3 and, for longer (Xmas) runs, an ASM/Understudy.</li>
          <li>Names &amp; contact details for each leg of the tour will be available no less than eight weeks before our visit to your theatre.</li>
        </ul>      
        <h3>Get In / Fit up</h3>
        <ul>        
          <li>We travel in a 3.5 LWB Luton.</li>
          <li>The unload and fit-up of the set will take 2-3 hours depending on the get-in.</li>
          <li>The LX fit up will take 2/2.5 sessions depending on whether a pre-rig is available. The relighter does not fit up the physical production but fits LX all the way through.</li>
        </ul>      
        <h3>Sound</h3>
        <ul>
          <li>The actors have radio mics operated from kit that we bring.</li>
          <li>There is a soundtrack played from QLab on a Mac which we bring which is played through your house PA. We will need foldback SL and SR. The sound check will take one hour and can be done as soon as the actors arrive (approx. 4pm)</li>
        </ul>      
        <h3>Light</h3>
        <ul>
          <li>The rig is being re-designed for touring at the moment. Kit list and rigging details to follow.</li>
          <li>We will need, at a minimum, a two- universe Ion desk. If you don't have this or equivalent, please let us know asap.</li>
          <li>We use three strings of digital festoons run through DMX which extend into the auditorium. If you have an iron, we will hang the festoons in front of it. If not, they connect to the top centre of the set prosc.</li>
          <li>We also have a star cloth and ground rows on stage which connect through DMX.</li>
        </ul>    
        <h3>Dressing rooms</h3>
        <ul>
          <li>We will need two dressing rooms, the cast is 2f &amp; 1m.</li>
          <li>We will need access to your laundry room.</li>
          <li>If you have another room for our SM, that would ideal. If it's really not possible, s/he will share with the cast.</li>
        </ul>
        <h3>Safety</h3>
        <p>Risk assessments and fire-proofing certificates etc will be provided no later than eight weeks before our visit to your theatre.</p>
        <p>For questions please contact Chris Wallis <a href="mailto:chris.wallis@watershed.uk.com">chris.wallis@watershed.uk.com</a> - 07973818298</p>
      </section>
    </main>
  )
}

export default IndustryPage
