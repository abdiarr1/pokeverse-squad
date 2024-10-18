import { useState } from 'react';
import Heading from './Heading';
import Search from './Search';
import PokemonList from './PokemonList';

const PokemonSection = ({ pokemon }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Heading classes="mb-3">All Pokemon</Heading>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PokemonList pokemon={pokemon} searchTerm={searchTerm} />
    </>
  );
};

export default PokemonSection;
