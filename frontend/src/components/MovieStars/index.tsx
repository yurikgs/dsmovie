import { ReactComponent as StarFull } from 'assets/img/star-full.svg'
import { ReactComponent as StarHalf } from 'assets/img/star-half.svg'
import { ReactComponent as StarEmpty } from 'assets/img/star-empty.svg'
import './styles.css'

// Aux: Generates Stars Fill Array

function getFills(score: number) {

  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

//Star Props

type StarProps = {
  fill: number
}

//Auxiliar Component Star: 
function Star ({ fill }: StarProps) {
    if (fill===0) {
      return (
        <StarEmpty />
      )
    } else
    if (fill===0.5) {
      return (
        <StarHalf />
      )
    } else {
      return (
        <StarFull />
      )
    }
}


// Props
type Props = {
  score: number
}


// Component return:

function MovieStars ({ score } : Props) {

  const fills = getFills(score)
  return (
    <div className="dsmovie-stars-container">
  <Star fill={fills[0]} />
  <Star fill={fills[1]} />
  <Star fill={fills[2]} />
  <Star fill={fills[3]} />
  <Star fill={fills[4]} />
</div>
  )
} export default MovieStars