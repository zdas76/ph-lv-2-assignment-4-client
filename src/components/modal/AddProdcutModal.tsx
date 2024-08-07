import { useState } from "react";
import { Button, Modal } from "antd";
import AddProduct from "../form/AddProduct";
import { Pencil } from "lucide-react";
import { FieldType } from "../../types/productTypes";

export default function AddProdcutModal(props: FieldType) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {props.name ? (
        <Pencil
          type="primary"
          onClick={() => setOpen(true)}
          className="cursor-pointer text-5xl"
        />
      ) : (
        <Button type="primary" onClick={() => setOpen(true)}>
          Add Product
        </Button>
      )}
      <Modal
        title="ADD A PRODUCT"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1200}
      >
        <AddProduct {...props} />
      </Modal>
    </div>
  );
}
