import Button from "@/components/UI/button";
import { Card } from "@mui/material";

import Image from "next/image";
import SettingCard from "./settings-card";

export default function UserWishlist() {
  return (
    <SettingCard>
        <div className="h-80">
        <div className="grid grid-cols-4 gap-6 ">
        <Card className="bg-black border-0 p-2 rounded-xl">
          <Image src="/images/product1.jpg" alt="product1" width={260} height={260} className="rounded-xl h-32" />
          <h5 className="text-base font-semibold tracking-tight text-white flex items-center justify-center my-1">iPhone 12 Pro</h5>
          <hr />
          <div className="flex items-center justify-center">
            <span className="text-base font-bold text-white my-1">$599</span>
          </div>
          <div className="flex items-center justify-center mb-2">
            <Button link="" className="bg-emerald-500 hover:bg-emerald-900">
              <p className="text-xs">View Product</p>
            </Button>
          </div>
        </Card>
        <Card className="bg-black border-0 p-2 rounded-xl">
          <Image src="/images/product1.jpg" alt="product1" width={260} height={260} className="rounded-xl h-32" />
          <h5 className="text-base font-semibold tracking-tight text-white flex items-center justify-center my-1">iPhone 12 Pro</h5>
          <hr />
          <div className="flex items-center justify-center">
            <span className="text-base font-bold text-white my-1">$599</span>
          </div>
          <div className="flex items-center justify-center">
            <Button link="" className="bg-emerald-500 hover:bg-emerald-900">
              <p className="text-xs">View Product</p>
            </Button>
          </div>
        </Card>
        <Card className="bg-black border-0 p-2 rounded-xl">
          <Image src="/images/product1.jpg" alt="product1" width={260} height={260} className="rounded-xl h-32" />
          <h5 className="text-base font-semibold tracking-tight text-white flex items-center justify-center my-1">iPhone 12 Pro</h5>
          <hr />
          <div className="flex items-center justify-center">
            <span className="text-base font-bold text-white my-1">$599</span>
          </div>
          <div className="flex items-center justify-center">
            <Button link="" className="bg-emerald-500 hover:bg-emerald-900">
              <p className="text-xs">View Product</p>
            </Button>
          </div>
        </Card>
        <Card className="bg-black border-0 p-2 rounded-xl">
          <Image src="/images/product1.jpg" alt="product1" width={260} height={260} className="rounded-xl h-32" />
          <h5 className="text-base font-semibold tracking-tight text-white flex items-center justify-center my-1">iPhone 12 Pro</h5>
          <hr />
          <div className="flex items-center justify-center">
            <span className="text-base font-bold text-white my-1">$599</span>
          </div>
          <div className="flex items-center justify-center">
            <Button link="" className="bg-emerald-500 hover:bg-emerald-900">
              <p className="text-xs">View Product</p>
            </Button>
          </div>
        </Card>
      </div>
        </div>
      
    </SettingCard>
  );
}
