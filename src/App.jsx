import Navbar from './components/Navbar';
import useFetchPokemon from './hooks/useFetchPokemon';
import { SquadContextProvider } from './context/SquadContext';
import SquadSection from './components/SquadSection';
import PokemonSection from './components/PokemonSection';
import Spinner from './components/Spinner';
import Error from './components/Error';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

function App() {
  const { pokemon, isLoading, isError } = useFetchPokemon(url);

  if (isLoading) return <Spinner />;

  if (isError) return <Error />;

  return (
    <main className="p-5">
      <SquadContextProvider>
        <Navbar />
        <SquadSection />
        <PokemonSection pokemon={pokemon} />
      </SquadContextProvider>
    </main>
  );
}

export default App;
