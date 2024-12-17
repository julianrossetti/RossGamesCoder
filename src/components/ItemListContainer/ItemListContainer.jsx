import ItemList from "../ItemList/ItemList"
import {useState} from "react"
import UseSearchItem from "../hooks/UseSearchItem"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const { products, search} = UseSearchItem()
    const filteredItems = categoryId != "productos" ? products.filter(item => item.category === categoryId) : products
    const [word, setWord] = useState("")
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
            <ItemList products={filteredItems} />
        </>
    )
}

export default ItemListContainer