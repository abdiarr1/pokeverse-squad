import { useContext } from 'react';
import Button from './Button';
import { SquadContext } from '../context/SquadContext';

const PokemonCard = ({ name, info }) => {
  console.log(info);

  const { squad, addPokemonToSquad, removePokemonFromSquad } =
    useContext(SquadContext);

  const exists = squad.find((element) => element.name === name);

  return (
    <div className="p-3 text-center p-3 bg-[#D9D9D9] rounded max-w-[150px]">
      <img className="mx-auto bg-[#E2E2E2]" src={info.sprites.front_default} />
      <div className="text-left capitalize p-1 pr-0 mt-2 text-xs text-nowrap">
        <h2 className="font-bold">{name}</h2>
        <div className="text-[10px]">
          <p>
            {info?.moves?.at(18)?.move?.name || info?.moves?.at(1)?.move?.name}{' '}
            ({Math.ceil(Math.random() * 100)})
          </p>
          <div className="flex justify-between mt-3">
            <p className="">Level {info.stats.at(0).base_stat}</p>
            {exists ? (
              <Button
                classes="bg-[#A60100] px-1"
                onClick={() => removePokemonFromSquad(name)}
              >
                Remove
              </Button>
            ) : (
              <Button
                classes="bg-[#237102] px-3"
                onClick={() => addPokemonToSquad({ name, info })}
              >
                Add
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
