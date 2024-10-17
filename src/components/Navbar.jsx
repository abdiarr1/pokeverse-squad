import { useContext } from 'react';
import { FaSquareFull } from 'react-icons/fa';
import Button from './Button';
import { SquadContext } from '../context/SquadContext';

const Navbar = () => {
  const { squad } = useContext(SquadContext);

  return (
    <nav className="p-2.5 m-0 bg-[#5A5A5A] mx-auto mb-10">
      <div className="flex text-white justify-between items-center">
        <div className="flex space-x-2">
          <FaSquareFull className="w-7 h-7 text-[#D9D9D9]" />
          <h1 className="font-bold text-xl">Pokeverse</h1>
        </div>
        <div>
          {squad.length > 1 && (
            <Button classes="bg-[#A60100] py-[2px]">Battle</Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
