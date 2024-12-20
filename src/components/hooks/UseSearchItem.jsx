import { useEffect, useState} from "react"
import { useParams } from "react-router-dom";
//import { getItems } from "../Mockproducts";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

const UseSearchItem = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([])
  useEffect(()=>{
    const collectionRef = collection(db, "products")
    getDocs(collectionRef)
      .then((querySnapshot)=>{
        const items = querySnapshot.docs.map((doc)=>{
          return {id: doc.id, ...doc.data()}
        })
        setProducts(items)
      })
  },[])
  const search = (word) => {
    const lowerCaseWord = word.toLowerCase();
    const filteredProducts = products.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(lowerCaseWord)
      )
    );
    if(categoryId === "productos"){setProducts(products)}
    setProducts(filteredProducts);
  };
  return {
    search, products
  }
}

export default UseSearchItem