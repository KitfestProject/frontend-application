import { useState } from "react";
import toast from "react-hot-toast";
import { IoWarning } from "react-icons/io5";
import axiosClient from "@/axiosClient";
import { QRModal, ScannerLoader } from "@/components";
import { RiQrScanLine } from "react-icons/ri";
import { GoCheckCircleFill } from "react-icons/go";
import { Scanner } from "@yudiel/react-qr-scanner";
import DarkLogo from "@/assets/kitft-logo-dark.png";

const QRCodeScannerUI = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [qrData, setQrData] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isScanning, setIsScanning] = useState(true);

  // Toggle success modal
  const toggleSuccessModal = () => setShowSuccessModal((prev) => !prev);
  const toggleWarningModal = () => setShowWarningModal((prev) => !prev);
  const toggleErrorModal = () => setShowErrorModal((prev) => !prev);

  // Handle QR code scan and verification
  const handleVerifyQrCode = async (endpoint) => {
    try {
      setLoading(true); // Show spinner
      if (!endpoint) {
        setMessage("Invalid QR-Code. Try Again");
        toggleErrorModal();
        setLoading(false);
        return;
      }

      const uri = endpoint.replace(/^["']|["']+$/g, "");
      const response = await axiosClient.get(uri);

      const { success, message } = response.data;

      if (!success) {
        setMessage(message);
        toggleWarningModal();
        setLoading(false);
        return;
      }

      setMessage(message);
      toggleSuccessModal();
    } catch (error) {
      setMessage("Error verifying QR code. Try again.");
      console.error(error);
      toggleErrorModal();
    } finally {
      setLoading(false);
      setIsScanning(false);
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
    setIsScanning(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Header */}
        <header className="w-full py-4 bg-primary text-white flex flex-col justify-between items-center gap-3">
          <h1 className="text-2xl font-semibold">QR Code Scanner</h1>
        </header>

        {/* Main Scanner Area */}
        <main className="flex flex-col items-center justify-center w-full flex-grow p-5">
          <div className="w-full max-w-md mx-auto bg-white dark:bg-darkGray dark:border dark:border-gray/50 p-6 shadow-lg rounded-lg">
            {isScanning ? (
              <Scanner
                onScan={handleScan}
                BarcodeFormat={["QR_CODE"]}
                onError={handleError}
                scanDelay={500}
                containerStyle={{ width: "100%", height: "300px" }}
              />
            ) : (
              <p className="text-center text-gray-600">Scanner is closed</p>
            )}
            <p className="text-center mt-4 text-gray-600">
              Point the camera at the QR code to scan
            </p>
          </div>

          {/* Show Spinner when loading */}
          {loading && (
            <div className="flex justify-center items-center mt-5">
              <ScannerLoader />
            </div>
          )}

          {/* Retry Button */}
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-2 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-dark transition"
          >
            Retry Scanning
            <RiQrScanLine className="text-xl ml-2 inline-block" />
          </button>
        </main>

        {/* Footer */}
        <footer className="w-full py-4 bg-gray-800 text-dark text-center text-xs dark:text-darkGray">
          <p>© 2024 TheatreKe QR App. All rights reserved.</p>
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
            <p className="text-gray-600 text-center mb-4">{message}</p>
            <button
              onClick={toggleSuccessModal}
              className="px-6 py-2 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-dark transition"
            >
              Close
            </button>
          </div>
        </QRModal>
      )}

      {/* Show Warning Modal */}
      {showWarningModal && (
        <QRModal classes="mx-5 md:mx-0" onClose={toggleWarningModal}>
          <div className="md:w-[500px] w-full bg-white dark:bg-darkGray rounded-md p-5 flex flex-col items-center">
            <IoWarning className="text-4xl text-yellow-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Warning!
            </h2>
            <p className="text-gray-600 text-center mb-4">{message}</p>
            <button
              onClick={toggleWarningModal}
              className="px-6 py-2 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-dark transition"
            >
              Close
            </button>
          </div>
        </QRModal>
      )}

      {/* Show Error Modal */}
      {showErrorModal && (
        <QRModal classes="mx-5 md:mx-0" onClose={toggleErrorModal}>
          <div className="md:w-[500px] w-full bg-white dark:bg-darkGray rounded-md p-5 flex flex-col items-center">
            <IoWarning className="text-4xl text-red-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Error!</h2>
            <p className="text-gray-600 text-center mb-4">{message}</p>
            <button
              onClick={toggleErrorModal}
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
