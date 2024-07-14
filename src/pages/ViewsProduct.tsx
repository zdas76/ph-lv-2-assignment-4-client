import { useParams } from "react-router-dom"
import { useGetProductIdQuery } from "../redux/featurs/product/productApi";


export default function ViewsProduct() {
const params = useParams();
    // console.log(params)
const {data, isLoading} = useGetProductIdQuery(params);

console.log(data)
    
  return (
    <div>ViewsProduct</div>
  )
}
