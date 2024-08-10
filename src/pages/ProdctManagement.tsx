import AddProdcutModal from "../components/modal/AddProdcutModal";
import ProductTable from "../components/productManagement/ProductTable";

export default function ProdctManagement() {
  return (
    <div>
      <div className="flex justify-between my-10 px-10">
        <p className="text-2xl font-bold">Product List</p>

        <AddProdcutModal
          _id={""}
          name={""}
          price={0}
          description={""}
          category={""}
          stock={0}
        />
      </div>
      <div>
        <ProductTable />
      </div>
      <div></div>
    </div>
  );
}
