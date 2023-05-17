import type { NextApiRequest, NextApiResponse } from "next";
import {
  contactUsEmailTemplate,
  mailOptions,
  offeringEmailTemplate,
  transporter,
} from "../../config/nodemailer";

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const { firstName, lastName, email, phoneNumber, companyName, message } =
      req.body;

    if (!firstName || !lastName || !email) {
      return res.status(400).json({ message: "All Fields are required!" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "Contact Us",
        text: "",
        html: contactUsEmailTemplate({
          firstName,
          lastName,
          email,
          phoneNumber,
          companyName,
          message,
        }),
      });

      return res
        .status(200)
        .json({ message: "Email has been sent sucessfully!" });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({ message: error });
    }
  } else {
    return res.status(400).json({ message: "Bad request" });
  }
};
export default handler;
