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
    } = req.body;

    if (!firstName || !lastName || !email) {
      return res.status(400).json({ message: "All Fields are required!" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "Email Subject",
        text: "This is a sample text",
        html: offeringEmailTemplate({ email }),
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
