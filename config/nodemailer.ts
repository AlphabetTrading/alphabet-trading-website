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

const contactUsTemplateDir = path.join("lib/contactUsEmailTemplate.hbs");
const offeringsTemplateDir = path.join("lib/offeringsEmailTemplate.hbs");

const offeringSource = fs.readFileSync(offeringsTemplateDir, {
  encoding: "utf-8",
});
const contactUsSource = fs.readFileSync(contactUsTemplateDir, {
  encoding: "utf-8",
});

const offeringsTemplate = handlebars.compile(offeringSource);
const contactUsTemplate = handlebars.compile(contactUsSource);

export const offeringEmailTemplate = (data: any) => offeringsTemplate(data);
export const contactUsEmailTemplate = (data: any) => contactUsTemplate(data);

export const mailOptions = {
  from: user,
  to: user,
};
