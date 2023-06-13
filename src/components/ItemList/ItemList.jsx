import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <div className="container">
      <div class="row align-items-start">
        
      {productos.map(prod => <Item key={prod.id} {...prod} />)}
      
      </div>
    </div>
  )
}

export default ItemList
