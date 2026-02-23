import React, { useState } from 'react';


export default function AddProductForm({setCards}) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [isAvailable, setIsAvailable] = useState('');
  const [view, setView] = useState('');
  const [discription1, setDiscription1] = useState('');
  const [discription2, setDiscription2] = useState('');
  const [discription3, setDiscription3] = useState('');
  const [discription4, setDiscription4] = useState('');
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');
  const [cart_id, setCart_id] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log({ name, price, isAvailable, view, discription1, discription2, discription3, discription4, img1, img2, img3, cart_id  });
    setCards(old=>{
      return [...old,{ name, price, isAvailable, view, discription1, discription2, discription3, discription4, img1, img2, img3, cart_id  }]
    })

    fetch("http://localhost:8000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",  // Set headers in an object under 'headers'
      },
      body: JSON.stringify({ name, price, isAvailable, view, discription1, discription2, discription3, discription4, img1, img2, img3, cart_id }), // Send JSON body
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
       
        <input 
        type="text" 
        placeholder="discription2" 
        value={discription2} 
        onChange={(e) => setDiscription2(e.target.value)} 
        style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "16px", padding: "8px", marginBottom: "10px" }}
      />

      <input 
        type="text" 
        placeholder="discription3" 
        value={discription3} 
        onChange={(e) => setDiscription3(e.target.value)} 
        style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "16px", padding: "8px", marginBottom: "10px" }}
      />

      <input 
        type="text" 
        placeholder="discription4" 
        value={discription4} 
        onChange={(e) => setDiscription4(e.target.value)} 
        style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "16px", padding: "8px", marginBottom: "10px" }}
      />

      <input 
        type="text" 
        placeholder="img1" 
        value={img1} 
        onChange={(e) => setImg1(e.target.value)} 
        style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "16px", padding: "8px", marginBottom: "10px" }}
      />

      <input 
        type="text" 
        placeholder="img2" 
        value={img2} 
        onChange={(e) => setImg2(e.target.value)} 
        style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "16px", padding: "8px", marginBottom: "10px" }}
      />

      <input 
        type="text" 
        placeholder="img3" 
        value={img3} 
        onChange={(e) => setImg3(e.target.value)} 
        style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "16px", padding: "8px", marginBottom: "10px" }}
      />

      <input 
        type="text" 
        placeholder="cart_id" 
        value={cart_id} 
        onChange={(e) => setCart_id(e.target.value)} 
        style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "16px", padding: "8px", marginBottom: "10px" }}
      />  



      <button type="submit" style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "16px", padding: "8px 16px" }}>
        Add
      </button>
    </form>
  </div>
  
  );
}
