import { useEffect } from "react";

const usePaystackPayment = ({
  publicKey,
  email,
  phone,
  amount,
  onSuccess,
  onClose,
}) => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializePayment = () => {
    const handler =
      window.PaystackPop &&
      window.PaystackPop.setup({
        key: publicKey,
        email: email,
        amount: amount,
        currency: "KES",
        ref: `ref_${generateUniqueReference(phone)}`, // Generate a random reference ref_KITFT202407151558331484449
        callback: (response) => {
          // Handle successful payment
          onSuccess(response);
        },
        onClose: () => {
          // Handle payment window close
          onClose();
        },
      });

    handler && handler.openIframe();
  };

  function generateUniqueReference(phoneNumber) {
    const companyName = "KITFT";

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");
    const milliseconds = String(currentDate.getMilliseconds()).padStart(3, "0");

    // Format the date and time as YYYYMMDDHHMMSSMMM
    const formattedDateTime = `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;

    const phoneSuffix = phoneNumber.slice(-4);

    const uniqueReference = `${companyName}${formattedDateTime}${phoneSuffix}`;

    return uniqueReference;
  }

  return initializePayment;
};

export default usePaystackPayment;
