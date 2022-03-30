import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

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


export default function Reviews() {
    return (
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
    )
  }

