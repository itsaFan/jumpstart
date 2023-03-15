import Button from "../UI/button";

export default function AddProduct() {
  return (
    <>
      <div className="card mx-2 bg-zinc-800 border-2 border-emerald-400 text-center">
        <div className=" mb-3">
          <h1 className="text-base font-semibold mb-2">Add Product</h1>
          <input className="rounded-lg text-sm" size={40} type="text" id="productName" placeholder="Product Name" />
        </div>
        <div className=" mb-3">
          <input className="rounded-lg text-sm" size={40} type="text" id="price" placeholder="Price" />
        </div>
        <div className=" mb-3">
          <input className="rounded-lg text-sm" size={40} type="text" id="quantity" placeholder="Quatity/Amount" />
        </div>
        <div className=" mb-3">
          <input className="rounded-lg text-sm" size={40} type="text" id="category" placeholder="Category" />
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
          Add Product
        </Button>
      </div>
    </>
  );
}
