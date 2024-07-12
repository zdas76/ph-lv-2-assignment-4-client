import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { useGetAllProductQuery } from '../../redux/featurs/product/productApi';


interface DataType {
  key: React.Key;
  name: string;
  images: number;
  stock: string;
  price: string;
  description: string;
}



export default function ProductTable() {

     const {data, isLoading} = useGetAllProductQuery(undefined);

  if(isLoading){
    return <p>Loading .....</p>
  }
const Products= data.data;
    console.log(Products)

    const columns: TableColumnsType<DataType> = [
    { title: 'Images', dataIndex: 'images', key: 'images' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { title: 'Stock', dataIndex: 'stock', key: 'stock' },
    { title: 'price', dataIndex: 'price', key: 'price' },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <div><a>Delete</a> <a>Update</a></div>,
    },
];


  return (
     <Table
    columns={columns}
    dataSource={Products}
  />
  )
}
