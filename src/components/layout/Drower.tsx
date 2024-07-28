import { Button, Drawer, Space } from "antd";
import { AlignRight } from "lucide-react";

import { useState } from "react";

export default function Drower() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Space>
        <AlignRight
          onClick={showDrawer}
          className="text-white text-2xl font-bold"
        />
      </Space>
      <Drawer
        title="Drawer with extra actions"
        placement={"left"}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}
