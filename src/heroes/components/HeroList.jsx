import { HeroCard } from "./";

import { getHerosByPublisher } from "../helpers";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHerosByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 ">
      {heroes.map((hero) => (
        /* Con el spread operator podemos mandarle todas las 
        propiedades del objeto sin necesidad de escribirlas 
        todas una por una. */
        <HeroCard key={hero.id} {...hero}/>
      ))}
    </div>
  );
};
