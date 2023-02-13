import clsx from "clsx";
import React, { useState } from "react";

type Props = {};

const ContactMap = (props: Props) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <div className="w-full md:w-5/6 lg:w-2/3 xl:w-3/4 2k:w-2/3 flex justify-center relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.814552717868!2d38.80608701470348!3d8.989205693548472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f3417fa3409%3A0xdd425604f4c28bc0!2sAlphabet%20Trading%20Plc!5e0!3m2!1sen!2set!4v1673300739245!5m2!1sen!2set"
        width="800"
        height="600"
        className={clsx("", isIframeLoaded ? "relative" : "absolute")}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsIframeLoaded(true)}
      />
      {!isIframeLoaded && (
        <div className="flex relative animate-pulse flex-row items-center min-w-[800px] min-h-[600px] justify-center space-x-5">
          <div className="h-full w-full bg-secondary/10"></div>
        </div>
      )}
    </div>
  );
};

export default ContactMap;
