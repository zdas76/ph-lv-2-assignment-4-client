import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { Image } from "antd";
import {
  useDeteProductMutation,
  useGetAllProductQuery,
} from "../../redux/featurs/product/productApi";
import AddProdcutModal from "../modal/AddProdcutModal";
import { Trash2 } from "lucide-react";

interface DataType {
  key: React.Key;
  name: string;
  images: string;
  stock: number;
  price: number;
  description: string;
}

export default function ProductTable() {
  const { data: product, isLoading: productLoading } = useGetAllProductQuery(
    {}
  );
  const [deleteProduct] = useDeteProductMutation();

  const handelDelete = (id: string) => {
    deleteProduct(id);
  };

  if (productLoading) {
    return <p>Loading .....</p>;
  }
  const Products = product?.data;

  const columns: TableColumnsType<DataType> = [
    {
      title: "Images",
      dataIndex: "images",
      key: "images",
      width: "15%",
      render: (images) => (
        <span>
          <Image width={60} src={images} />
        </span>
      ),
    },
    { title: "Name", dataIndex: "name", key: "name", width: "15%" },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "30%",
      render: (description) => (
        <span className="line-clamp-2"> {description}</span>
      ),
    },
    { title: "Stock", dataIndex: "stock", key: "stock", width: "10%" },
    { title: "price", dataIndex: "price", key: "price", width: "10%" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      width: "20%",
      render: (Products) => (
        <div className="flex gap-5">
          <AddProdcutModal {...Products} />
          <Trash2
            onClick={() => handelDelete(Products._id)}
            className="cursor-pointer"
          />
        </div>
      ),
    },
  ];

  return <Table columns={columns} dataSource={Products} />;
}
