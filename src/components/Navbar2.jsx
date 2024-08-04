import React from 'react'
import { Link } from 'react-router-dom'
const pages = [{name:'Products',route:"/"}, {name:'Contact',route:"/contact"}, {name:'Cart',route:"/cart"}, {name:'About',route:"/about"}];

export default function Navbar2({cards,orders,setOrders}) {
  return (
    <div>

      {pages.map(page=>{
        return <Link to={page.route}>{page.name}</Link>
      })}
    </div>
  )
}
