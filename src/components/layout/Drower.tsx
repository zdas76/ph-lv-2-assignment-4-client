import { Button, Drawer, Menu, Space } from "antd";
import { AlignRight } from "lucide-react";

import { useState } from "react";
import { items1 } from "./RootLayout";

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
        title="SFEA"
        placement={"left"}
        width={400}
        onClose={onClose}
        open={open}
        style={{ background: "#000", color: "white" }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={["2"]}
          items={items1}
          className="flex flex-col justify-center text-xl bg-black"
        />
      </Drawer>
    </div>
  );
}
