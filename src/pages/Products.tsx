
import { useGetAllProductQuery } from '../redux/featurs/product/productApi';
import Items from '../components/productManagement/Items';
import { Row } from 'antd';
type TItem = {
    _id: string;
    category: string;
    description: string;
    images: string;
    name: string;
    price: number;
    stock: number;
}
export default function Products() {
  const {data, isLoading} = useGetAllProductQuery(undefined);

  if(isLoading){
    <p>... Loading</p>
  }
const items = data?.data;
console.log(items)
  return (
    <div>
      <div></div>
      <Row gutter={[24, 28]} justify="start">
        {
          items?.map((item:TItem, index:number) => <Items {...item} key={index} />)
        }
      </Row>
    </div>
  )
}
