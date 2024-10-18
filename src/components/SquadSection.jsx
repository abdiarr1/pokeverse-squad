import { useContext } from 'react';
import { SquadContext } from '../context/SquadContext';
import Heading from './Heading';
import PokemonList from './PokemonList';

const SquadSection = () => {
  const { squad } = useContext(SquadContext);

  return (
    <>
      {squad.length > 0 && (
        <>
          <Heading>My Squad ({squad.length})</Heading>
          <PokemonList />
        </>
      )}
    </>
  );
};

export default SquadSection;
