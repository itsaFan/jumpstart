import SettingIcon from "@/components/icons/settings-icon";
import { Breadcrumb } from "flowbite-react";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SettingCard(props: Props) {
  const router = useRouter();

  return (
    <div className="container grid grid-cols-12 mx-auto my-16">
      <div className="card col-start-4 col-span-6 bg-zinc-800 rounded-2xl">
        <div className="flex">
          <SettingIcon />
          <h1 className="mt-1 ml-2 text-xl font-medium">Dashboard</h1>
        </div>
        <div className="mt-3 bg-black py-3 px-5 w-ful">
          <Breadcrumb aria-label="dashboard label" className="">
            <Breadcrumb.Item href="/user-profile/settings/1">
              <h1 className={router.pathname.includes("/settings") ? "text-rose-400 hover:text-rose-400" : "hover:text-rose-400"}>Settings</h1>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/user-profile/order-history/1">
              <h1 className={router.pathname.includes("/order-history") ? "text-rose-400 hover:text-rose-400" : "hover:text-rose-400"}>Order History</h1>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/user-profile/wishlist/1">
              <h1 className={router.pathname.includes("/wishlist") ? "text-rose-400 hover:text-rose-400" : "hover:text-rose-400"}>Wishlist</h1>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="my-10 ml-2">{props.children}</div>
      </div>
    </div>
  );
}
