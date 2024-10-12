import { useState } from "react";
import toast from "react-hot-toast";
import axiosClient from "@/axiosClient";
import { QRModal } from "@/components";
import { GoCheckCircleFill } from "react-icons/go";
import { Scanner } from "@yudiel/react-qr-scanner";

const QRCodeScannerUI = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [qrData, setQrData] = useState(null);

  // Toggle success modal
  const toggleSuccessModal = () => setShowSuccessModal((prev) => !prev);

  // Handle QR code scan and verification
  const handleVerifyQrCode = async (endpoint) => {
    try {
      if (!endpoint) {
        toast.error("Invalid QR-Code");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }

      const uri = endpoint.replace(/^["']|["']+$/g, "");
      console.log(uri);
      const response = await axiosClient.get(uri);

      const { success, message, data } = response.data;

      if (!success) {
        toast.error(message);
        return setTimeout(() => {
          window.location.reload();
        }, 2000);
      }

      toast.success(message);
      setQrData(data); // Store scanned QR data to show in the modal
      toggleSuccessModal();
    } catch (error) {
      toast.error("Error verifying QR code.");
      console.error(error);

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  // Handle QR scan result
  const handleScan = (data) => {
    if (data) {
      handleVerifyQrCode(data[0].rawValue);
    }
  };

  // Handle scan errors
  const handleError = (error) => {
    toast.error("Error scanning QR code.");
    console.error("Error scanning QR Code:", error);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Header */}
        <header className="w-full py-4 bg-primary text-white text-center">
          <h1 className="text-2xl font-semibold">QR Code Scanner</h1>
        </header>

        {/* Main Scanner Area */}
        <main className="flex flex-col items-center justify-center w-full flex-grow p-5">
          <div className="w-full max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
            <Scanner
              onScan={handleScan}
              BarcodeFormat={["QR_CODE"]}
              onError={handleError}
              scanDelay={500}
              containerStyle={{ width: "100%", height: "300px" }}
            />

            <p className="text-center mt-4 text-gray-600">
              Point the camera at the QR code to scan
            </p>
          </div>

          {/* Retry Button */}
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-2 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-dark transition"
          >
            Retry Scanning
          </button>
        </main>

        {/* Footer */}
        <footer className="w-full py-4 bg-gray-800 text-white text-center">
          <p>© 2024 QR App. All rights reserved.</p>
        </footer>
      </div>

      {/* Show Success Modal */}
      {showSuccessModal && (
        <QRModal classes="mx-5 md:mx-0" onClose={toggleSuccessModal}>
          <div className="md:w-[500px] w-full bg-white dark:bg-darkGray rounded-md p-5 flex flex-col items-center">
            <GoCheckCircleFill className="text-4xl text-green-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              QR Code Verified!
            </h2>
            <p className="text-gray-600 text-center mb-4">
              Your QR code was successfully verified.
            </p>
            <button
              onClick={toggleSuccessModal}
              className="px-6 py-2 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-dark transition"
            >
              Close
            </button>
          </div>
        </QRModal>
      )}
    </>
  );
};

export default QRCodeScannerUI;
