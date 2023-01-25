import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import handlebars from "handlebars";
const user = process.env.USER_EMAIL;
const pass = process.env.USER_EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass,
  },
});

const dir = path.join("lib/emailTemplate.hbs");
const source = fs.readFileSync(dir, { encoding: "utf-8" });
const template = handlebars.compile(source);

export const offeringEmailTemplate = (data: any) => template(data);

export const mailOptions = {
  from: user,
  to: user,
};
