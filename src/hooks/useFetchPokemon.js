import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchPokemon = (url) => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      const promises = data.results.map(async (item) => {
        const response = await fetch(item.url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        return { name: item.name, info: data };
      });

      const resolvedPromises = await Promise.all(promises);

      setPokemon(resolvedPromises);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemon, isLoading, isError };
};

export default useFetchPokemon;
