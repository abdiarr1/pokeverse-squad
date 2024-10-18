import { SquadContext } from '../context/SquadContext';
import PokemonCard from './PokemonCard';
import { useContext } from 'react';

const PokemonList = ({ pokemon, searchTerm }) => {
  const { squad } = useContext(SquadContext);

  const renderPokemon = () => {
    if (!pokemon)
      return squad.map((singlePokemon) => {
        return <PokemonCard key={singlePokemon.name} {...singlePokemon} />;
      });
    return pokemon
      .filter((poke) => poke.name.includes(searchTerm))
      .map((singlePokemon) => {
        return <PokemonCard key={singlePokemon.name} {...singlePokemon} />;
      });
  };

  return (
    <article className="grid xs:grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 justify-evenly gap-y-6 gap-x-3 w-[60%] mx-auto mb-10">
      {renderPokemon()}
    </article>
  );
};

export default PokemonList;
