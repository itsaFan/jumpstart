import { connectDatabase, insertDocument } from "@/helpers/db-connect";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the Database Failed!" });
    return;
  }

  if (req.method === "POST") {
    const { productName, price, quantity, category, productDesc } = req.body;
    if (!productName || productName.trim() == "" || !productDesc || productDesc.trim() === "") {
      res.status(422).json({ message: "Invalid Input" });
      client.close();
      return;
    }

    const newProduct = {
      productName,
      price,
      quantity,
      category,
      productDesc,
    };

    let result;

    try {
      result = await insertDocument(client, "products", newProduct);
      // newProduct._id = result.insertedId
      res.status(201).json({ message: "Add Product Success!", product: newProduct });
    } catch (error) {
      res.status(500).json({ message: "Add New Product Failed!" });
    }
  }
  client.close();
}





