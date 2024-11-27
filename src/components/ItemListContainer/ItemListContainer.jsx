import ItemList from "../ItemList/ItemList"
import {useState, useEffect} from "react"
import UseSearchItem from "../hooks/UseSearchItem"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const { products, search} = UseSearchItem()
    const [word, setWord] = useState("")
    const { categoryId } = useParams()
    const handleResult = (e) => {
        e.preventDefault()
        search(word)
      }
    return (
        <>
            <form onSubmit={handleResult}>
                <input value={word} onChange={(e) => setWord(e.target.value)} type="text" placeholder="Buscar producto" />
                <button type="submit">Buscar</button>
            </form>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer