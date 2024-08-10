import { useState } from "react";
import { Modal } from "antd";
import { Pencil } from "lucide-react";
import { FieldType } from "../../types/productTypes";
import UpdateProduct from "../form/UpdateProduct";

export default function UpdateProdcutModal(props: FieldType) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Pencil
        type="primary"
        onClick={() => setOpen(true)}
        className="cursor-pointer text-5xl"
      />

      <Modal
        title="ADD A PRODUCT"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1200}
      >
        <UpdateProduct {...props} />
      </Modal>
    </div>
  );
}
