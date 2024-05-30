import { HeroCard } from "./";
import { getHerosByPublisher } from "../helpers";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHerosByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
      {heroes.map((hero) => (
        <div key={hero.id} className="col">
          <HeroCard {...hero} />
        </div>
      ))}
    </div>
  );
};
