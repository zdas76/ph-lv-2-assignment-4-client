/* eslint-disable react-hooks/rules-of-hooks */

import type { GetProp, FormProps, UploadFile, UploadProps } from 'antd';
import { Button, Form, Input, Upload } from 'antd';
import { useState } from 'react';


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

type FieldType = {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
};


export default function addProduct() {
 
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handelchange =()=> {
    

  }
    
  const props: UploadProps = {
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };
  
  
  const initialValues = {
    name: 'Pranesh',
    price: 25,
    description: 'string',
    category: 'string',
    stock: 20
  }

  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
   
   try{
     const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('image', file as FileType);
    });
    const res = await fetch('https://api.imgbb.com/1/upload?key=359f63f9ad5255ed4304d57ae8f579cf', {
      method: 'POST',
      body: formData,
    })
    if(res.ok){
      const data = await res.json();
    values.image = data?.data?.url;
    console.log(values)
      // form.resetFields();
    }
  }catch(error){
    console.log(error)
  }
}

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
          rules={[{ required: true, message: 'Please input your product name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please input your price!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input your description!' }]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          label="Images"
          name="image"
          rules={[{ required: true, message: 'Please select a image!' }]}
        >
          <Upload
            {...props}
            onChange = {handelchange}
           
          >
            <Button>select</Button>
          </Upload>

        </Form.Item>

        <Form.Item<FieldType>
          label="Category"
          name="category"
          rules={[{ required: true, message: 'Please input your category name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Stok"
          name="stock"
          rules={[{ required: true, type:'number', message: 'Please input your stock amount' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>


    </div>
  )
}
