import { Image } from "antd";
import { useGetAllProductQuery } from "../../redux/featurs/product/productApi";

export default function ImageGalerry() {
  const { data, isLoading } = useGetAllProductQuery({});

  if (isLoading) {
    <p>Loading ....</p>;
  }

  const featuredProduct = data?.data?.slice(0, 18);
  // console.log(featuredProduct);

  return (
    <div className="my-20">
      <p className="text-center text-3xl mb-10 font-bold uppercase">
        Image Gallery
      </p>

      <div className=" grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 bg-white">
        {featuredProduct?.map((item) => (
          <Image src={item.images} className="p-5" />
        ))}
      </div>
    </div>
  );
}
