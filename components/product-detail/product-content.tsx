import Image from "next/image";
import HeartIcon from "../icons/heart-icon";
import LikeIcon from "../icons/like-icon";

export default function ProductDetailContent() {
  return (
    <div className="grid grid-cols-12 my-10">
      <div className="card col-start-4 col-span-3 -py-11 mx-6">
        <Image src="/images/product1.jpg" alt="product1" width={460} height={460} className="rounded-xl  h-96 w-96 shadow-lg" />
      </div>
      <div className="col-span-3 mx-2">
        <h1 className="mt-5 text-4xl font-semibold">iPhone 12 Pro</h1>
        <div className="flex mt-2">
          <LikeIcon />
          <h1 className="mt-1 ml-1 font-medium">1000+</h1>
        </div>
        <div className="mt-2">
          <HeartIcon />
          <h1 className="mt-1 font-semibold text-emerald-400 text-xl">Price: $500.00</h1>
        </div>
        <div className="mt-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet nisi id quam feugiat porta in in enim. Cras bibendum nulla eu nisl tincidunt sodales ac ut neque. Suspendisse eget nulla vel nibh viverra porta a id mi.
            Integer facilisis mi vel arcu tincidunt, vitae tempor lorem scelerisque.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
