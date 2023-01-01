import { ReactComponent as Star } from '../assets/star.svg';

function Rating({ etoiles }) {
  const totalStars = [1, 2, 3, 4, 5];
  const numberOfStars = etoiles
  console.log(numberOfStars)

  return (
    <span className="rating" aria-label={`${numberOfStars} étoiles`} > {
      totalStars.map(i => (
        < Star
          key={i}
          className={numberOfStars >= i ? "star_active" : "star"}
          height="30px"
        />
      ))
    }
    </ span >
  );
}

export default Rating;