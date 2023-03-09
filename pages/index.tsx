import HomeCarousel from "@/components/home/banner-carousel";
import HomeProductContent from "@/components/home/carousel-product/product-content";
import ProductList from "@/components/product/product-list";
import CustomHRline from "@/components/UI/customHR";
import PageHeader from "@/components/UI/page-header";

export default function Homepage() {
  return (
    <>
      <PageHeader title="Homepage" />
      <section className="mb-20">
        <div className="">
          <HomeCarousel />
        </div>
        <div className="">
          <HomeProductContent />
        </div>
        <CustomHRline />
        <div>
          <ProductList />
        </div>
      </section>
    </>
  );
}
