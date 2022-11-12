import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  token: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { code } = req.query;
  const client_id = "oBkvXPuoQJm8nZQAupbNZQ";
  const client_secret = "5TADCZ5rTg00BpboRZiByH5qxqF132WS";
  const authorization = client_id + ":" + client_secret;

  let buff = new Buffer(authorization);
  let base64data = buff.toString("base64");

  var data = {
    code: code,
    grant_type: "authorization_code",
    redirect_uri: "http://localhost:3000/api/oauth",
  };
  var config = {
    method: "post",
    url: "https://zoom.us/oauth/token",
    headers: {
      Authorization: `Basic ${base64data}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  const response = await axios(config);
  const { access_token } = response.data;

  res.status(200).json({ token: access_token });
}
