import { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import PokemonList from './components/PokemonList';
import useFetchPokemon from './hooks/useFetchPokemon';
import { SquadContext } from './context/SquadContext';
import Heading from './components/Heading';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

function App() {
  const [squad, setSquad] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const { pokemon, isLoading, isError } = useFetchPokemon(url);

  const addPokemonToSquad = (pokemon) => {
    if (squad.length < 6) {
      const exists = squad.find((element) => element.name === pokemon.name);
      if (!exists) setSquad([...squad, pokemon]);
    }
  };

  const removePokemonFromSquad = (name) => {
    setSquad(squad.filter((item) => item.name !== name));
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Sorry, there was an error</div>;

  return (
    <main className="p-5">
      <SquadContext.Provider
        value={{ squad, addPokemonToSquad, removePokemonFromSquad }}
      >
        <Navbar />
        {squad.length > 0 && (
          <>
            <Heading>My Squad ({squad.length})</Heading>
            <PokemonList />
          </>
        )}

        <Heading classes="mb-3">All Pokemon</Heading>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <PokemonList
          pokemon={pokemon.filter((poke) => poke.name.includes(searchTerm))}
        />
      </SquadContext.Provider>
    </main>
  );
}

export default App;
