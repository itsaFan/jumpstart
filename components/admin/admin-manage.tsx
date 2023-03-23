import Button from "../UI/button";
import CustomHRline from "../UI/customHR";
import AddProduct from "./add-product";
import AddUser from "./add-user";
import SalesReportTable from "./sales-report";

export default function AdminContent() {
  function addProductHandler(productData: { productName: string; price: string; quantity: string; category: string; productDesc: string;  }) {
    fetch("api/admin/product", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <>
      <div className="card w-full gap-4 bg-zinc-800 h-80">
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 gap-4 mb-4 mx-52">
            <AddProduct onAddProduct={addProductHandler} />
            <AddUser />
          </div>
        </div>
      </div>
      <div className="bg-transparent h-80"></div>
    </>
  );
}
