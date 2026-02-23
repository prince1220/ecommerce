import React from 'react';

function DeleteProduct({ selected }) {
  
  function deleteProduct(id) {
    fetch(`http://localhost:8000/products/${id}`, {
      method: "DELETE",
    })
  }

  return (
    <div>
      <button
        onClick={() => {
          for (let id of selected) {
            deleteProduct(id);
          }
        }}
      >
        Delete Selected
      </button>
    </div>
  );
}

export default DeleteProduct;
