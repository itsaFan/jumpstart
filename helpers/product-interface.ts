export interface Product {
  _id: string;
  name: string;
  image: string;
  price: string;
}

export interface NewProductProps {
    onAddProduct: (product: { 
      productName: string; 
      price: string; 
      quantity: string; 
      category: string; 
      productDesc: string;
    }) => void;
  }


export interface ProductItemProps {
  products: Product[];
}
  
  
