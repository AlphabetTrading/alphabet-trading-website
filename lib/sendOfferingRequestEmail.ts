export const sendOfferingRequestEmail = async (data: any) => {
  console.log(data, "is the data");
  await fetch("/api/request-offerings", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        console.log("error", res);
        throw new Error("Failed to send message");
      }
      return res.json();
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};
