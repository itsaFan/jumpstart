import HomeCarousel from "@/components/home/home-carousel";
import PageHeader from "@/components/UI/page-header";

export default function Homepage() {
  return (
    <>
      <PageHeader title="Homepage" />
      <section className="h-screen">
        <div className="">
          <HomeCarousel />
        </div>
      </section>
    </>
  );
}
