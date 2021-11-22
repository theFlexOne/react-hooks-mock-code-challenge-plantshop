import React, { useEffect, useState } from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants }) {
  const renderCards = () => {
    return (
      plants &&
      plants.map(plant => {
        return <PlantCard key={plant.id} plant={plant} />;
      })
    );
  };

  return <ul className="cards">{renderCards()}</ul>;
}

export default PlantList;
