import { useState } from 'react';
import { Button, Modal } from 'antd';
import AddProduct from '../form/AddProduct';

export default function AddProdcutModal() {

    const [open, setOpen] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add Product
      </Button>
      <Modal
        title="ADD A PRODUCT"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1200}
      >
        <AddProduct />
      </Modal>
    </div>
  )
}
