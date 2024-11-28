import React, { useState } from 'react';


export default function AddProductForm({setCards}) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [isAvailable, setIsAvailable] = useState('');
  const [view, setView] = useState('');
  const [discription1, setDiscription1] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log({ name, price, isAvailable, view, discription1 });
    setCards(old=>{
      return [...old,{ name, price, isAvailable, view, discription1 }]
    })

    fetch("http://localhost:8000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",  // Set headers in an object under 'headers'
      },
      body: JSON.stringify({ name, price, isAvailable, view, discription1 }), // Send JSON body
    })


    ///cards state is an array that feed the table with data
    ////add an item to this array (infomation?(form fields))

    ///fetch to send the data
  };

  return (
    <div>
    <form onSubmit={handleSubmit} style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "16px" }}>
      <input 
        type="text" 
        placeholder="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "16px", padding: "8px", marginBottom: "10px" }}
      />
      <input 
        type="text" 
        placeholder="price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "16px", padding: "8px", marginBottom: "10px" }}
      />
      <input 
        type="text" 
        placeholder="IsAvailable" 
        value={isAvailable} 
        onChange={(e) => setIsAvailable(e.target.value)} 
        style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "16px", padding: "8px", marginBottom: "10px" }}
      />
      <input 
        type="text" 
        placeholder="view" 
        value={view} 
        onChange={(e) => setView(e.target.value)} 
        style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "16px", padding: "8px", marginBottom: "10px" }}
      />

      <input 
        type="text" 
        placeholder="discription1" 
        value={discription1} 
        onChange={(e) => setDiscription1(e.target.value)} 
        style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "16px", padding: "8px", marginBottom: "10px" }}
      />

      <button type="submit" style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "16px", padding: "8px 16px" }}>
        Add
      </button>
    </form>
  </div>
  
  );
}
