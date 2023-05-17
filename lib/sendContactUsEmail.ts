export const sendContactUsEmail = async (data: any) => {
  await fetch("/api/contact-us", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to send message");
      }
      return res.json();
    })
    .catch((error) => {
      return error;
    });
};
