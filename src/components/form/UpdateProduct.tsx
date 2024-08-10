/* eslint-disable react-hooks/rules-of-hooks */

import type { FormProps } from "antd";
import { Button, Form, Input, InputNumber } from "antd";
import { useUpdateProductMutation } from "../../redux/featurs/product/productApi";
import TextArea from "antd/es/input/TextArea";
import { FieldType } from "../../types/productTypes";
import Swal from "sweetalert2";

export default function UpdateProduct(props?: FieldType) {
  const [form] = Form.useForm();

  const initialValues = {
    name: props?.name,
    price: props?.price,
    description: props?.description,
    category: props?.category,
    stock: props?.stock,
  };

  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  console.log(isLoading);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const ressult = updateProduct({ ...values, id: props?._id });
    if ((await ressult).data) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        form={form}
        wrapperCol={{ span: 20 }}
        style={{ maxWidth: 900 }}
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Product name"
          name="name"
          rules={[
            { required: true, message: "Please input your product name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input your price!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
        >
          <TextArea rows={3} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Category"
          name="category"
          rules={[
            { required: true, message: "Please input your category name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Stok"
          name="stock"
          rules={[
            { required: true, message: "Please input your stock amount" },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {isLoading ? <span className="disabled">Submiting</span> : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
