import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") res.send("GET request not allowed");
  let config = {
    method: "get",
    url: "https://api.zoom.us/v2/users",
    headers: {
      Authorization: `Bearer ${req.body.token as string}`,
    },
  };

  try {
    let response = await axios(config);
    res.send(response.data);
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
  }
}
