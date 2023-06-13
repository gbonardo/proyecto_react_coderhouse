import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {db} from '../../services/config';
import  { collection, getDocs, where, query} from 'firebase/firestore';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect( ()=> {
        const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");
        
        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return {id:doc.id, ...data}
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error))
    },[idCategoria])

    return (
        <div className="container text-center align-items-center">
        <h2>Productos</h2>
        <div class="row ">
        <ItemList productos={productos}/>
        </div>
        </div>
    )
}

export default ItemListContainer
