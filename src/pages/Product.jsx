import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product({cards,setOrders,orders}) {
  const {id}=useParams()

  if(!cards ){
    return <div>Getting product details</div>
  }
  if(!cards.find(el=>el.id==id)){
    return <div>Product not found</div>
  }
  const product = cards.find(el=>el.id==id) ////cards source? ()
  if(!product){
    return <div>Please wait for product details</div>
  }
  /*TODO design the product page*/
  return (
    <div> 

{product.name}
{product.price}

/
/
/


    </div>
  )
}


/*

0
1
2
3
<div className="."></div>

*/
/*
1234-23231-12312-31
3242-42312-23123-12



*/