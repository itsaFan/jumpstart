import Button from "../UI/button";
import { useRef, useState } from "react";
import { NewProductProps } from "@/helpers/product-interface";

export default function AddProduct(props: NewProductProps) {
  const [isInvalid, setIsInvalid] = useState(false);

  const productnameInputRef = useRef<HTMLInputElement>(null);
  const priceInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);
  const categoryInputRef = useRef<HTMLInputElement>(null);
  const productdescInputRef = useRef<HTMLTextAreaElement>(null);

  function addProductHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredName = productnameInputRef.current?.value;
    const enteredPrice = priceInputRef.current?.value;
    const enteredQuantity = quantityInputRef.current?.value;
    const enteredCate = categoryInputRef.current?.value;
    const enteredDesc = productdescInputRef.current?.value;

    if (
      !enteredName ||
      enteredName.trim() === '' ||
      !enteredPrice ||
      enteredPrice.trim() === '' ||
      !enteredQuantity ||
      enteredQuantity.trim() === '' ||
      !enteredCate ||
      enteredCate.trim() === '' ||
      !enteredDesc ||
      enteredDesc.trim() === '' 
    ) {
      setIsInvalid(true);
      return;
    }

    props.onAddProduct({
      productName: enteredName,
      price: enteredPrice,
      quantity: enteredQuantity,
      category: enteredCate,
      productDesc: enteredDesc,
    });
  }

  return (
    <>
      <div className="card mx-2 bg-zinc-800 border-2 border-emerald-400 text-center">
        <form onSubmit={addProductHandler}>
          <div className=" mb-3">
            <h1 className="text-base font-semibold mb-2">Add Product</h1>
            <input className="rounded-lg text-sm" size={40} type="text" id="productName" placeholder="Product Name" ref={productnameInputRef} />
          </div>
          <div className=" mb-3">
            <input className="rounded-lg text-sm" size={40} type="text" id="price" placeholder="Price" ref={priceInputRef} />
          </div>
          <div className=" mb-3">
            <input className="rounded-lg text-sm" size={40} type="text" id="quantity" placeholder="Quatity/Amount" ref={quantityInputRef} />
          </div>
          <div className=" mb-3">
            <input className="rounded-lg text-sm" size={40} type="text" id="category" placeholder="Category" ref={categoryInputRef} />
          </div>
          <div className=" mr-44 mb-3">
          {/* <input className="text-sm bg-white text-black font-semibold hover:bg-rose-400" type="file" accept="image/*" onChange={handleFileInputChange} ref={fileInputRef} /> */}
        </div>
          <div className=" mb-3">
            <textarea className="rounded-lg text-sm h-44 resize-y w-80" id="productDesc" placeholder="Description" ref={productdescInputRef}></textarea>
          </div>
          {isInvalid && <p>Please enter a valid data</p>}
          <Button link="" className="mx-5 text-sm bg-white text-black font-semibold hover:bg-rose-400">
          Add Product
        </Button>
        </form>
      </div>
    </>
  );
}
