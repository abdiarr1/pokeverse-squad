import { createContext, useState } from 'react';

export const SquadContext = createContext();

export const SquadContextProvider = ({ children }) => {
  const [squad, setSquad] = useState([]);

  const addPokemonToSquad = (pokemon) => {
    if (squad.length > 5) return;
    const exists = squad.find((element) => element.name === pokemon.name);
    if (!exists) setSquad([...squad, pokemon]);
  };

  const removePokemonFromSquad = (name) => {
    setSquad(squad.filter((item) => item.name !== name));
  };

  return (
    <SquadContext.Provider
      value={{ squad, addPokemonToSquad, removePokemonFromSquad }}
    >
      {children}
    </SquadContext.Provider>
  );
};
