import { Card } from "flowbite-react";
import Image from "next/image";
import Button from "../UI/button";
import { Product } from "@/helpers/product-interface";

type Props = {
  products: Product[];
};

export default function ProductItem({ products }: Props) {
  return (
    <div className="mx-24">
      <div className="grid grid-cols-6 gap-6">
        {products.map((product) => (
          <Card key={product._id} className="bg-zinc-800 border-0">
            <Image src="/images/product1.jpg" alt={product.name} width={360} height={560} />
            {/* <Image src={product.image} alt={product.name} width={360} height={560} /> */}
            <h5 className="text-base font-semibold tracking-tight text-white">{product.name}</h5>
            <hr />
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-white">{product.price}</span>
              <Button link={`/product/${product._id}`}>
                <p className="text-xs">Add to Cart</p>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   let client;
//   try {
//     client = await connectDatabase();
//   } catch (error) {
//     console.log("Connecting to the Database Failed");
//     return {
//       props: {
//         products: [],
//       },
//     };
//   }

// }

// export async function getStaticProps() {
//   const products = await getAllProducts();
//   return {
//     props: {
//       products,
//     },
//   };
// }
