import Button from "../UI/button";
import CustomHRline from "../UI/customHR";
import AddProduct from "./add-product";
import AddUser from "./add-user";
import SalesReportTable from "./sales-report";

export default function AdminContent() {
  return (
    <>
      <div className="card w-full gap-4 bg-zinc-800 h-80">
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 gap-4 mb-4 mx-52">
            <AddProduct />
            <AddUser />
          </div>
       
        </div>
      </div>
      <div className="bg-transparent h-80"></div>
    </>
  );
}
