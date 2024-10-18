import Navbar from './components/Navbar';
import { SquadContextProvider } from './context/SquadContext';
import SquadSection from './components/SquadSection';
import PokemonSection from './components/PokemonSection';
import { PokemonContextProvider } from './context/PokemonContext';

function App() {
  return (
    <main className="p-5">
      <SquadContextProvider>
        <Navbar />
        <SquadSection />
        <PokemonContextProvider>
          <PokemonSection />
        </PokemonContextProvider>
      </SquadContextProvider>
    </main>
  );
}

export default App;
