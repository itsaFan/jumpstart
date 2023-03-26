import HomeCarousel from "@/components/home/banner-carousel";
import HomeProductContent from "@/components/home/carousel-product/product-content";
import ProductItem from "@/components/product/product-item";
import CustomHRline from "@/components/UI/customHR";
import PageHeader from "@/components/UI/page-header";
import { getProducts } from "@/helpers/db-connect";
import { Product } from "@/helpers/product-interface";

type Props = {
  products: Product[];
};

export default function Homepage({ products }: Props) {
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
          <ProductItem products={products} />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}

