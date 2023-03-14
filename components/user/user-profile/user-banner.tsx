import Button from "@/components/UI/button";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="container grid grid-cols-12 mx-auto">
      <div className="card rounded-b-none col-start-4 col-span-6 bg-rose-400">
        <div className="flex justify-end">
            <Button link="/register" className="rounded-xl bg-zinc-800 p-2"><h3 className="text-xs">Edit Profile</h3></Button>
          {/* <button className="rounded-2xl bg-gray-800 active:bg-blue-600 p-3" ><h3 className="text-xs">Edit Profile</h3></button> */}
        </div>
        <div className="pt-14">
            <Image src="/images/dummy-profile.png" width={120} height={120} alt="profile" className="rounded-full bg-white border-2 border-zinc-800 -mb-20" />
        </div>
      </div>
    </div>
  );
}
