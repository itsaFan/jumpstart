import { connectDatabase, insertDocument } from "@/helpers/db-connect";
import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import path from "path";

const uploadDir = path.join(process.cwd(), "public", "uploads");

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await connectDatabase();

  if (req.method === "POST") {
    upload.single("image")(req as any, res as any, async function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred while uploading the file.");
      }

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
        imageUrl: `/uploads/${(req as any).file.filename}`,
      };

      let result;

      try {
        result = await insertDocument(client, "products", newProduct);
        res.status(201).json({ message: "Add Product Success!", product: newProduct });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Add New Product Failed!" });
      }

      client.close();
    });
  } else {
    res.status(405).json({ message: "Invalid Request Method" });
    client.close();
  }
}





