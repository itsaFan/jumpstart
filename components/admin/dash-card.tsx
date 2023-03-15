import { Card } from "flowbite-react";
import classes from "./css/dash-card.module.css";

export default function DashCard() {
  return (
    <div className="grid grid-cols-10 gap-6 my-10">
      <Card className={`col-start-5 border-none flex justify-center items-center ${classes.bgCard}`}>
        <h1 className="text-sm font-medium -my-3">
          Total Produtcs: <br /> 9999
        </h1>
      </Card>
      <Card className={`border-none flex justify-center items-center ${classes.bgCard}`}>
        <h1 className="text-sm font-medium -my-3">
          Total User: <br /> 9999
        </h1>
      </Card>
    </div>
  );
}
