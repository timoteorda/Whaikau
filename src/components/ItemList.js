import Item from "./Item"


function ItemList({productos}) {
  return(
    <section  className='sectionCard'>
      {productos.map(producto =>{
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



