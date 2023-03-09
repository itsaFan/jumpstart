import Button from "../UI/button";
import classes from "./css/nav-search.module.css";

export default function NavSearch() {
  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="category">
            <p>Categories</p>
          </label>
          <select id="category">
            <option value="2022">Shoes</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month"><p>Products</p></label>
          <input type="text" id="search" placeholder="Product name" />
        </div>
      </div>
      <Button link="">
        <p className="text-xs">Search</p>
      </Button>
    </form>
  );
}
