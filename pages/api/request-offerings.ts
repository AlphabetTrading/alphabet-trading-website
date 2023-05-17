import type { NextApiRequest, NextApiResponse } from "next";
import {
  mailOptions,
  offeringEmailTemplate,
  transporter,
} from "../../config/nodemailer";

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      companyName,
      shippingAddress,
      city,
      state,
      zipCode,
      selectedOfferings,
    } = req.body;
    console.log("nati", req.body);

    if (!firstName || !lastName || !email || !selectedOfferings.length) {
      return res.status(400).json({ message: "All Fields are required!" });
    }

    const data = {
      title: "Offerings Request",
      firstName,
      lastName,
      email,
      phoneNumber,
      companyName,
      shippingAddress,
      city,
      state,
      zipCode,
      selectedOfferings,
    };
    console.log(data);
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "New Offerings Request",
        text: "This is a sample text",
        html: offeringEmailTemplate(data),
      });

      return res
        .status(200)
        .json({ message: "Request has been sent sucessfully!" });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({ message: error });
    }
  } else {
    return res.status(400).json({ message: "Bad request" });
  }
};
export default handler;
