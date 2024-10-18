import { createContext, useContext } from 'react';
import useFetchPokemon from '../hooks/useFetchPokemon';

export const PokemonContext = createContext();

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

export const PokemonContextProvider = ({ children }) => {
  const { pokemon, isLoading, isError } = useFetchPokemon(url);

  return (
    <PokemonContext.Provider value={{ pokemon, isLoading, isError }}>
      {children}
    </PokemonContext.Provider>
  );
};
