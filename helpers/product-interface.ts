


export interface NewProductProps {
    onAddProduct: (product: { 
      productName: string; 
      price: string; 
      quantity: string; 
      category: string; 
      productDesc: string;
    }) => void;
  }
  
  
