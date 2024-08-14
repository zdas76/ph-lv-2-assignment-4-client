import { Button, Form, Input } from "antd";

import {
  Facebook,
  Instagram,
  Link2Icon,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

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
        <div className="grid grid-flow-col justify-center gap-10 mb-5"></div>

        <div className="flex md:flex-row justify-around flex-col">
          <div className="flex flex-col space-y-3">
            <h1 className="text-lg mb-4">Quick Link :</h1>
            <Link className="text-blue-300" to="/">
              Home
            </Link>
            <Link className="text-blue-300" to="/product">
              Product
            </Link>
            <Link className="text-blue-300" to="/about">
              About
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-lg mb-4">Social Media :</h1>
            <div className="grid grid-cols-2 gap-6 mb-5">
              <p className="cursor-pointer text-blue-400">
                <Facebook />
              </p>
              <p className="cursor-pointer text-blue-400">
                <Twitter />
              </p>
              <p className="cursor-pointer text-blue-400">
                <Youtube />
              </p>
              <p className="cursor-pointer text-blue-400">
                <Link2Icon />
              </p>
              <p className="cursor-pointer text-blue-400">
                <Linkedin />
              </p>
              <p className="cursor-pointer text-blue-400">
                <Instagram />
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-lg mb-4">Contact Person :</h1>
            <p className="text-lg font-bold mt-6 text-blue-300">
              Saswata Das Mrinal
            </p>
            <p className="font-semibold text-blue-300">CEO</p>
            <p className="text-blue-400">Email: mrinal_ceo@mail.com</p>
          </div>
        </div>

        <div className="mt-10">
          All right to Sarker Fitness Equipment and Accessories©
          {new Date().getFullYear()} Created by{" "}
          <span className="text-blue-500">- Zibonanando Das</span>
        </div>
      </div>
    </div>
  );
}
