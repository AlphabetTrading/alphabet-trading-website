import React from "react";

type Props = {};

const ContactMap = (props: Props) => {
  return (
    <div className="w-full sm:w-3/4 lg:w-2/3 flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.814552717868!2d38.80608701470348!3d8.989205693548472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f3417fa3409%3A0xdd425604f4c28bc0!2sAlphabet%20Trading%20Plc!5e0!3m2!1sen!2set!4v1673300739245!5m2!1sen!2set"
        width="800"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        className="aspect-square"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>{" "}
    </div>
  );
};

export default ContactMap;
