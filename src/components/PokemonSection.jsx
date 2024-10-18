import { useContext, useState } from 'react';
import Heading from './Heading';
import Search from './Search';
import PokemonList from './PokemonList';
import Spinner from './Spinner';
import { PokemonContext } from '../context/PokemonContext';
import Error from './Error';

const PokemonSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { isLoading, isError } = useContext(PokemonContext);

  if (isLoading) return <Spinner />;

  if (isError) return <Error />;

  return (
    <>
      <Heading classes="mb-5">All Pokemon</Heading>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PokemonList searchTerm={searchTerm} />
    </>
  );
};

export default PokemonSection;
