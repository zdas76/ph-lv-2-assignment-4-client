/* eslint-disable react-hooks/rules-of-hooks */

import type { GetProp, FormProps, UploadFile, UploadProps } from "antd";
import { Button, Form, Input, InputNumber, Upload } from "antd";
import { useState } from "react";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "../../redux/featurs/product/productApi";
import TextArea from "antd/es/input/TextArea";
import { FieldType } from "../../types/productTypes";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

export default function addProduct(props: FieldType) {
  const [form] = Form.useForm();

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const images: UploadProps = {
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  const initialValues = {
    name: props.name,
    price: props.price,
    description: props.description,
    category: props.category,
    stock: props.stock,
    images: props.images,
  };

  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    if (props._id) {
      const result = updateProduct({ ...values, id: props._id });
      console.log(result);
    } else {
      try {
        const formData = new FormData();
        fileList.forEach((file) => {
          formData.append("image", file as FileType);
        });
        const res = await fetch(
          "https://api.imgbb.com/1/upload?key=359f63f9ad5255ed4304d57ae8f579cf",
          {
            method: "POST",
            body: formData,
          }
        );
        if (res.ok) {
          const data = await res.json();
          values.images = data?.data?.url;

          const ressult = await createProduct(values);
          console.log(ressult);
          form.resetFields();
          setFileList([]);
        }
      } catch (error) {
        console.log(error);
      }
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

        {!props.images && (
          <Form.Item
            label="Images"
            name="images"
            rules={[{ required: true, message: "Please select a image!" }]}
          >
            <Upload {...images}>
              <Button>select</Button>
            </Upload>
          </Form.Item>
        )}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
