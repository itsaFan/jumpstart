import Button from "@/components/UI/button";
import Image from "next/image";
import SettingCard from "./settings-card";

export default function UserSettings() {
  return (
    <SettingCard>
      <div className="grid grid-cols-12">
        <div className="col-start-2 mt-2">
          <h1 className="font-medium text-xl flex justify-end">Profile</h1>
        </div>
        <div className="card col-span-9 col-start-3 mx-2 bg-black">
          <div className="flex justify-end mb-8">
            <label htmlFor="">
              <p className="text-sm font-medium m-2">Name</p>
            </label>
            <input className="rounded-lg text-sm" size={40} type="text" id="" placeholder="{user.name}" />
          </div>
          <div className="flex justify-end mb-8">
            <label htmlFor="">
              <p className="text-sm font-medium m-2">Email</p>
            </label>
            <input className="rounded-lg text-sm" size={40} type="text" id="" placeholder="{user.email}" />
          </div>
          <div className="flex justify-end mb-8">
            <label htmlFor="pNumber">
              <p className="text-sm  font-medium m-2">Phone Number</p>
            </label>
            <input className="rounded-lg text-sm" size={40} type="text" id="pNumber" placeholder="{user.pNumber}" />
          </div>
          <div className="flex justify-end mb-8">
            <label htmlFor="country">
              <p className="text-sm  font-medium m-2">Country</p>
            </label>
            <input className="rounded-lg text-sm" size={40} type="text" id="country" placeholder="Country" />
          </div>
          <div className="flex justify-end mb-8">
            <label htmlFor="city">
              <p className="text-sm  font-medium m-2">City</p>
            </label>
            <input className="rounded-lg text-sm" size={40} type="text" id="city" placeholder="City" />
          </div>
          <div className="flex justify-end mb-8">
            <label htmlFor="address">
              <p className="text-sm  font-medium m-2">Address</p>
            </label>
            <textarea className="rounded-lg text-sm h-44 resize-y w-80" id="address" placeholder="Address"></textarea>
          </div>
          <div className="flex justify-end items-end">
            <Button link="" className="mx-5 text-sm bg-white text-black font-semibold hover:bg-rose-400">
              Edit Profile
            </Button>
          </div>
        </div>
        <div className="col-start-2 mt-7">
          <h1 className="font-medium text-xl flex justify-end">Profile Image</h1>
        </div>
        <div className="card col-span-9 col-start-3 mt-5 mx-2 bg-black">
          <div className="flex">
            <Image src="/images/dummy-profile.png" width={120} height={120} alt="profile" className="rounded-full bg-white border-2 border-zinc-800" />
            <Button link="" className="mx-5 my-10 text-sm bg-white text-black font-semibold hover:bg-rose-400">
              Change Image
            </Button>
          </div>
        </div>
        <div className="col-start-2 mt-7">
          <h1 className="font-medium text-xl flex justify-end">Security</h1>
        </div>
        <div className="card col-span-9 col-start-3 mt-5 mx-2 bg-black">
          <div className="flex justify-end mb-8">
            <label htmlFor="">
              <p className="text-sm font-medium m-2">Old Password</p>
            </label>
            <input className="rounded-lg text-sm" size={40} type="text" id="" placeholder="Old Password" />
          </div>
          <div className="flex justify-end mb-8">
            <label htmlFor="">
              <p className="text-sm font-medium m-2">New Password</p>
            </label>
            <input className="rounded-lg text-sm" size={40} type="text" id="" placeholder="New Password" />
          </div>
          <div className="flex justify-end mb-8">
            <label htmlFor="">
              <p className="text-sm font-medium m-2">Repeat Password</p>
            </label>
            <input className="rounded-lg text-sm" size={40} type="text" id="" placeholder="Repeat" />
          </div>
          <div className="flex justify-end items-end">
            <Button link="" className="mx-5 text-sm bg-white text-black font-semibold hover:bg-rose-400">
              Change Password
            </Button>
          </div>
        </div>
      </div>
    </SettingCard>
  );
}
