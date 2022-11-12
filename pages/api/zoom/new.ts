import axios, { Axios } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { IZoomPayload, TUser } from "../../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") res.send("GET request not allowed");
  const payload = req.body.meeting as IZoomPayload;
  const user = req.body.user as TUser;
  const token = req.body.token as string;

  let config = {
    method: "post",
    url: ` https://api.zoom.us/v2/users/${user.email}/meetings`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: payload,
  };

  try {
    let response = await axios(config);
    res.send(response.data);
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
  }
}
