import { Button, Form, Input } from "antd";

import {
  Facebook,
  Instagram,
  Link2Icon,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="">
      <div className="relative">
        <div className="w-full lg:w-6/12 bg-white rounded-xl mx-auto p-5 lg:p-8 -mt-32">
          <h1 className="uppercase text-black mb-6 text-2xl font-bold">
            Our Newsletter
          </h1>
          <Form className="flex gap-5 justify-center items-center">
            <Input placeholder="Your Email" className="py-3" />
            <Button type="primary" htmlType="submit" className="px-10 py-5">
              Send
            </Button>
          </Form>
        </div>
      </div>

      <div className="pt-10">
        <div></div>
        <div className="grid grid-flow-col justify-center gap-10 mb-5">
          <p>
            <Facebook />
          </p>
          <p>
            <Twitter />
          </p>
          <p>
            <Youtube />
          </p>
          <p>
            <Link2Icon />
          </p>
          <p>
            <Linkedin />
          </p>
          <p>
            <Instagram />
          </p>
        </div>

        <div>
          <div>
            <h1 className="text-2xl mb-4">Contact Person :</h1>
            <p className="text-lg font-bold mt-6"> Saswata Das Mrinal</p>
            <p className="font-semibold">CEO</p>
            <p>01000000000</p>
            <p>Email: mrinal_ceo@mail.com</p>
          </div>
          <div></div>
        </div>

        <div className="mt-10">
          All right to Sarker Fitness Equipment and Accessories©
          {new Date().getFullYear()} Created by{" "}
          <span className="text-blue-500">Zibonanando Das</span>
        </div>
      </div>
    </div>
  );
}
