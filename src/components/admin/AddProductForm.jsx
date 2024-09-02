import React, { useState } from 'react';

export default function AddProductForm({setCards}) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [isAvailable, setIsAvailable] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log({ name, price, isAvailable });
    setCards(old=>{
      return [...old,{ name, price, isAvailable }]
    })

    ///cards state is an array that feed the table with data
    ////add an item to this array (infomation?(form fields))

    ///fetch to send the data
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='name' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder='price' 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder='IsAvailable' 
          value={isAvailable} 
          onChange={(e) => setIsAvailable(e.target.value)} 
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
