import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import { MeetingConfirmationEmail } from "../../../utils/mail/templates";
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET")
    res.status(500).json({ message: "GET request not acepted" });

  const { host_email, agenda, start_url, start_time } = req.body;

  const msg = {
    to: [host_email, "sid86harth@gmail.com"],
    from: "infosid86@gmail.com",
    subject: "Meeting Confirmation",
    html: MeetingConfirmationEmail(agenda, start_time, start_url),
  };
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }

  res.send("Email sent");
}
