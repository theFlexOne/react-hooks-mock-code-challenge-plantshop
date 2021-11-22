import React, { useEffect, useState } from 'react';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';
import Search from './Search';

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');

  const displayedPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  });

  const addNewPlant = newPlant => {
    setPlants([...plants, newPlant]);
  };

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPlants(data);
      });
  }, []);

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search searchFilter={search} onSearchChange={setSearch} />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;
