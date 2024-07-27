import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { Image } from "antd";
import { useGetAllProductQuery } from "../../redux/featurs/product/productApi";

interface DataType {
  key: React.Key;
  name: string;
  images: string;
  stock: number;
  price: number;
  description: string;
}

export default function ProductTable() {
  // const { data, isLoading } = useGetAllProductQuery({});
  const { data:product, isLoading:productLoading } = useGetAllProductQuery({});

  if (productLoading) {
    return <p>Loading .....</p>;
  }
  const Products = product?.data;

  console.log(product);

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
      render: () => (
        <div>
          <a>Delete</a> <a>Update</a>
        </div>
      ),
    },
  ];

  return <Table columns={columns} dataSource={Products} />;
}
