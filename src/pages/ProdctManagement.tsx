
import AddProdcutModal from '../components/modal/AddProdcutModal'
// import { useGetAllProductQuery } from '../redux/featurs/product/productApi';
import ProductTable from '../components/productManagement/ProductTable';

export default function ProdctManagement() {

 
  
  return (
    <div>
      <div style={{display:'flex', justifyContent: 'space-between', padding: '10px 50px', backgroundColor:""}}>
        <p>Product List</p>
        
        <AddProdcutModal />
      </div>
      <div>
        <ProductTable />
      </div>
      <div></div>

    </div>
  )
}
