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
    const { email, password } = req.body;
    if (!email.includes("@") || !password || password.trim() == "") {
      res.status(422).json({ message: "Invalid Input" });
      client.close();
      return;
    }

    const newUser = {
      email,
      password,
    };

    let result;
    try {
      result = await insertDocument(client, "users", newUser);
      res.status(201).json({ message: "Register Success!", user: newUser });
    } catch (error) {
      res.status(500).json({ message: "Register Failed" });
    }
  }
  client.close();
}
