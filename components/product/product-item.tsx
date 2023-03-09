import { Card } from "flowbite-react";
import Image from "next/image";
import Button from "../UI/button";

export default function ProductItem() {
  return (
    <div className="grid grid-cols-6 gap-6">
      <Card className="bg-zinc-800 border-0">
        <Image src="/images/product1.jpg" alt="product1" width={360} height={560} />
          <h5 className="text-base font-semibold tracking-tight text-white">iPhone 12 Pro</h5>
        <hr />
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">$599</span>
          <Button link="">
            <p className="text-xs">Add to Cart</p>
          </Button>
        </div>
      </Card>
      <Card className="bg-zinc-800 border-0">
        <Image src="/images/product1.jpg" alt="product1" width={360} height={560} />
          <h5 className="text-base font-semibold tracking-tight text-white">iPhone 12 Pro</h5>
        <hr />
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">$599</span>
          <Button link="">
            <p className="text-xs">Add to Cart</p>
          </Button>
        </div>
      </Card>
      <Card className="bg-zinc-800 border-0">
        <Image src="/images/product1.jpg" alt="product1" width={360} height={560} />
          <h5 className="text-base font-semibold tracking-tight text-white">iPhone 12 Pro</h5>
        <hr />
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">$599</span>
          <Button link="">
            <p className="text-xs">Add to Cart</p>
          </Button>
        </div>
      </Card>
      <Card className="bg-zinc-800 border-0">
        <Image src="/images/product1.jpg" alt="product1" width={360} height={560} />
          <h5 className="text-base font-semibold tracking-tight text-white">iPhone 12 Pro</h5>
        <hr />
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">$599</span>
          <Button link="">
            <p className="text-xs">Add to Cart</p>
          </Button>
        </div>
      </Card>
      <Card className="bg-zinc-800 border-0">
        <Image src="/images/product1.jpg" alt="product1" width={360} height={560} />
          <h5 className="text-base font-semibold tracking-tight text-white">iPhone 12 Pro</h5>
        <hr />
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">$599</span>
          <Button link="">
            <p className="text-xs">Add to Cart</p>
          </Button>
        </div>
      </Card>
      <Card className="bg-zinc-800 border-0">
        <Image src="/images/product1.jpg" alt="product1" width={360} height={560} />
          <h5 className="text-base font-semibold tracking-tight text-white">iPhone 12 Pro</h5>
        <hr />
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">$599</span>
          <Button link="">
            <p className="text-xs">Add to Cart</p>
          </Button>
        </div>
      </Card>
      <Card className="bg-zinc-800 border-0">
        <Image src="/images/product1.jpg" alt="product1" width={360} height={560} />
          <h5 className="text-base font-semibold tracking-tight text-white">iPhone 12 Pro</h5>
        <hr />
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">$599</span>
          <Button link="">
            <p className="text-xs">Add to Cart</p>
          </Button>
        </div>
      </Card>
    </div>
  );
}
