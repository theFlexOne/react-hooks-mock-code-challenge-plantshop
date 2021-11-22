import React from 'react';

function NewPlantForm({ addNewPlant }) {
  const postPlant = e => {
    e.preventDefault();
    const [name, image, price] = e.target.querySelectorAll('input');
    // console.log(name.value, image.value, price.value);
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        image: image.value,
        price: price.value,
      }),
    };
    fetch('http://localhost:6001/plants', options)
      .then(res => res.json())
      .then(newPlant => addNewPlant(newPlant));
  };
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={postPlant}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
