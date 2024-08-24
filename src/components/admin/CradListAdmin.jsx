
import Card from "./CardCompAdmin.jsx"
export default function CardListAdmin({cards,setCards,pricesRange,searchQ}) {

  return (
    <div style={{border:"2px solid red",
    width:"100%",
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"flex-start",
    justifyContent:"start",
    columnGap:2
    }}>
{/*TODO create a table to visiual/edit list of items, using grids Material ui*/}
    {cards.filter(card=>{
        
      let price=Number(card.price.substring(1))

      return price>=pricesRange[0] && price<=pricesRange[1]
    }).map((card,index)=>{ {/* Can not read map of "undefined" */}
    
     if(!card.name.includes(searchQ) && !card.description.includes(searchQ)) return <></>
    
     
     return <Card setCards={setCards} cards={cards} id={card.id} name={card.name} description={card.description} price={card.price} isAvailable={card.isAvailable=="true"}   />
    })}




    
    </div>
  )
}