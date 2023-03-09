import HomeFeaturedProducts from "./featured-products";
import HomeProductCategory from "./product-category";

export default function HomeProductContent() {
  return (
    <div className="card w-full gap-4 bg-zinc-800">
      <div className="grid grid-cols-5 mx-20 gap-6">
        <HomeFeaturedProducts />
        <HomeProductCategory />
      </div>
    </div>
  );
}
