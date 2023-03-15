export default function ProfileContent() {
  return (
    <div className="container grid grid-cols-12 mx-auto -z-10">
      <div className="card rounded-t-none col-start-4 col-span-6 pb-24 bg-zinc-800 ">
        <div className="card mx-16 mt-20 bg-black">
          <h1 className="flex justify-center mb-2 font-semibold text-lg">User Data</h1>
          <div className="grid grid-cols-2 grid-rows-2 mb-5">
            <div className="mt-5">
              <label htmlFor="pNumber">
                <p className="text-sm mb-1 ml-1 font-medium">Phone Number</p>
              </label>
              <div className="box-border w-60 border-4 border-white bg-white rounded-md ">
                <p className="text-black text-sm font-medium ml-1">user.pNumber</p>
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="">
                <p className="text-sm mb-1 ml-1 font-medium">Email</p>
              </label>
              <div className="box-border w-60 border-4 border-white bg-white rounded-md ">
                <p className="text-black text-sm font-medium ml-1">user.email</p>
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="">
                <p className="text-sm mb-1 ml-1 font-medium">Country</p>
              </label>
              <div className="box-border w-60 border-4 border-white bg-white rounded-md ">
                <p className="text-black text-sm font-medium ml-1">user.country</p>
              </div>
            </div>
            <div className="mt-5 row-span-2">
              <label htmlFor="">
                <p className="text-sm mb-1 ml-1 font-medium">Address</p>
              </label>
              <div className="box-border w-60 border-4 border-white bg-white rounded-md ">
                <p className="text-black text-sm font-medium ml-1 h-24">user.address</p>
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="">
                <p className="text-sm mb-1 ml-1 font-medium">City</p>
              </label>
              <div className="box-border w-60 border-4 border-white bg-white rounded-md ">
                <p className="text-black text-sm font-medium ml-1">user.city</p>
              </div>
            </div>
            <div className="mt-5 col-span-2 ml-2">
              <label htmlFor="">
                <p className="text-sm mb-1 ml-1 font-medium">Bio</p>
              </label>
              <div className="box-border h-24 border-4 border-white bg-white rounded-md w-11/12 ">
                <p className="text-black text-sm font-medium ml-1">user.bio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

