import { Carousel } from "flowbite-react";

export default function HomeFeaturedProducts() {
  return (
    <div className="card col-span-2 bg-gradient-to-r from-zinc-900 to-zinc-600  ">
      <div className="text-white font-semibold text-lg">Featured Products</div>
      <div className="h-32 sm:h-36 xl:h-48 2xl:h-56">
        <Carousel slide={false}>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div>
    </div>
  );
}
