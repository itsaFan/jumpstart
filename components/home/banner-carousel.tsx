import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function HomeCarousel(): JSX.Element {
  return (
    <div className="card bg-transparent mx-20">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
        <Carousel slideInterval={5000}>
          <Image src="/images/c1.jpg" alt="productImg" width={1260} height={560} />
          <Image src="/images/c2.jpg" alt="productImg" width={1260} height={560} />
          <Image src="/images/c3.jpg" alt="productImg" width={1260} height={560} />
          <Image src="/images/c4.jpg" alt="productImg" width={1260} height={560} />
        </Carousel>
      </div>
    </div>
  );
}
