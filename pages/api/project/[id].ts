import { NextApiRequest, NextApiResponse } from "next";

import { MongoClient } from "mongodb";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(500).json({ message: "Soory this is get route" });
  }

  const URI: string = process.env.MONGO_URI as string;
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const data = await client.db("portfolio").collection("projects").findOne({ _id: req.query.id });
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
  }
}

export default handler;
