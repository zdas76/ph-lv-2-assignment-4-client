import { Button, Input, Select } from "antd";
import type { SelectProps } from "antd";
import {
  useGetAllProductQuery,
  useGetProductCategoryQuery,
} from "../redux/featurs/product/productApi";
import Items from "../components/productManagement/Items";
import { Row, Pagination } from "antd";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import type { PaginationProps } from "antd";

type TItem = {
  _id: string;
  category: string;
  description: string;
  images: string;
  name: string;
  price: number;
  stock: number;
};

export default function Products() {
  // const [size, setSize] = useState<SizeType>();
  const [searchTerm, setSearchTerm] = useState({});
  const [fields, setFields] = useState({});
  const [sort, setSort] = useState({});
  // const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(8);

  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setFields(state);
    }
  }, [state]);

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    console.log(current, pageSize);
  };

  const { data: category, isLoading } = useGetProductCategoryQuery("");
  if (isLoading) {
    <p> .... Loading Category</p>;
  }
  const catagories = [
    ...new Set(category?.data?.map((item: TItem) => item.category)),
  ];

  const { data: product, isLoading: productLoading } = useGetAllProductQuery({
    searchTerm,
    sort,
    fields,
  });

  if (productLoading) {
    <p>... Loading</p>;
  }
  const items = product?.data;

  const options: SelectProps["options"] = [];

  catagories?.map((item: any) => {
    return options.push({ value: item, label: item });
  });

  const onReset = () => {
    setSearchTerm({}), setFields({}), setSort({});
  };

  return (
    <div className="px-5 md:px-0">
      <div className="my-10 flex gap-5 justify-center">
        <Input
          addonBefore={<SearchOutlined />}
          placeholder="Type Search Item"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-96"
        />

        <Select
          // defaultValue={state}
          onChange={(value) => setFields(`${value}`)}
          mode="multiple"
          placeholder="Please select"
          className="w-full md:w-96"
          options={options}
        />

        <Select
          defaultValue=""
          style={{ width: "20%" }}
          onChange={(value) => setSort(`${value}`)}
          options={[
            { value: "", label: "Select one" },
            { value: "price", label: "Low to high" },
            { value: "-price", label: "High to low" },
          ]}
          className="w-full md:w-96"
        />

        <Button htmlType="button" onClick={onReset} className="w-28">
          Reset
        </Button>
      </div>
      <Row
        gutter={[24, 28]}
        justify="start"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 "
      >
        {items?.map((item: TItem, index: number) => (
          <Items {...item} key={index} />
        ))}
      </Row>
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={10}
        total={product?.length}
      />
    </div>
  );
}
