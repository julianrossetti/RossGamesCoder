import { useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import { getItems } from "../Mockproducts";

const UseSearchItem = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([])
  useEffect(()=>{
    getItems()
      .then((data)=>{
        setProducts(data)
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