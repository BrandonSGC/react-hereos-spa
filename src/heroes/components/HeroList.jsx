import { getHerosByPublisher } from "../helpers";


export const HeroList = ({ publisher }) => {

  const heroes = getHerosByPublisher(publisher);

  return (
    <ul>
      {
        heroes.map( (hero) => {
          return <li key={hero.id}>{hero.superhero}</li>
        } )
      }
    </ul>
  )
}
