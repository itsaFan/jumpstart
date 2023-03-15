import Button from "../UI/button";

export default function AddUser() {
  return (
    <>
      <div className="card mx-2 bg-zinc-800 border-2 border-emerald-400 text-center">
        <div className=" mb-3">
          <h1 className="text-base font-semibold mb-2">Add User</h1>
          <input className="rounded-lg text-sm" size={40} type="email" id="email" placeholder="Email Address" />
        </div>
        <div className=" mb-3">
          <input className="rounded-lg text-sm" size={40} type="password" id="pasw" placeholder="Password" />
        </div>
        <div className=" mb-3">
          <input className="rounded-lg text-sm" size={40} type="text" id="country" placeholder="Country" />
        </div>
        <div className=" mb-3">
          <input className="rounded-lg text-sm" size={40} type="text" id="city" placeholder="City" />
        </div>
        <div className=" mr-44 mb-3">
          <Button link="" className="text-sm bg-white text-black font-semibold hover:bg-rose-400">
            Upload Image
          </Button>
        </div>
        <div className=" mb-3">
          <textarea className="rounded-lg text-sm h-44 resize-y w-80" id="address" placeholder="Description"></textarea>
        </div>
        <Button link="" className="mx-5 text-sm bg-white text-black font-semibold hover:bg-rose-400">
          Add User
        </Button>
      </div>
    </>
  );
}