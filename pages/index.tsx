import HomeCarousel from "@/components/home/home-carousel";
import HomeProductContent from "@/components/home/product/product-content";
import PageHeader from "@/components/UI/page-header";

export default function Homepage() {
  return (
    <>
      <PageHeader title="Homepage" />
      <section className="h-screen mb-20">
        <div className="">
          <HomeCarousel />
        </div>
        <div className="">
          <HomeProductContent />
        </div>
      </section>
    </>
  );
}
