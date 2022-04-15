import Item from "./Item"


function ItemList({producto}) {
  return(
    <section  className='sectionCard'>
      {producto.map(producto =>{
        return(
            <Item
              key={producto.id}
              producto={producto}        
            />
        )
      })}

    </section>
  )}

  export default ItemList



