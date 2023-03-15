import Button from "../UI/button";

export default function ProductLogistics() {
  return (
    <div className="grid grid-cols-12 my-10 gap-2">
      <div className="card col-start-4 col-span-6 -py-11 mx-5">
        <div className="grid grid-cols-5">
          <Button link="" className="col-start-1 col-span-2 font-medium bg-zinc-800">
            - Add Amount +
          </Button>
          <div className="border-l-4 border-l-red-600 col-start-4">
            <h1 className="text-black  text-sm font-semibold ml-2">Added Amount: 1</h1>
            <h1 className="text-black  text-sm font-semibold ml-2">Total Price: $500.00</h1>
          </div>
          <Button link="" className="col-start-5 font-semibold text-sm hover:bg-rose-400 border-none bg-emerald-600">
            Procced to Pay
          </Button>
        </div>
      </div>
    </div>
  );
}
