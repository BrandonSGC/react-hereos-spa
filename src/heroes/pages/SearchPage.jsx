import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from '../helpers'

// Importamos la dependencia query-string.
import queryString from "query-string";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate();

  /* El useLocation basicamente nos retorna un obj con
  los datos de la url, ejemplo: 
  {
    hash: ""
    key: "05yjfvn8"
    pathname: "/search"
    search: "?=Spiderman"
    state: null
  }
  Sin embargo es complicado leer el "search", ya que 
  puede llevar muchos datos en el query, por lo tanto
  lo que podemos hacer es instalar la dependecncia de 
  query-string con npm i query-string y asi lo vamos 
  a trabajar de una manera mucho mas sencilla y nos
  evitamos tener que procesar nosotros eso. */
  const location = useLocation();

  /* El queryString.parse() nos retorna un objeto con las
    propiedades que nosotros tengamos en la URL, en este
    caso lo que tenemos es "http://localhost:5173/search?q=Batman"
    por lo tanto nos retorna: {
                                q="Batman"
                              }
  Por lo tanto lo vamos a desestructurar de una vez... */
  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);
  

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (evt) => {
    evt.preventDefault();

    //if (searchText.trim().length <= 0) return;

    // Mandar los query params...
    navigate(`?q=${searchText}`);


  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {(q === '') && <div className="alert alert-primary">Search a hero</div>}
          
          {
            (heroes.length === 0 && q !== '') 
              && 
            <div className="alert alert-danger">No hero with <b>{q}</b></div>
          }

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
          
        </div>
      </div>
    </>
  );
};
