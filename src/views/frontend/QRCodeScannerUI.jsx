import React from "react";
import { Scanner } from '@yudiel/react-qr-scanner';

const QRCodeScannerUI = () => {
  const handleScan = (data) => {
    if (data) {
      console.log("Scanned QR Code:", data);
      // You can add further actions, like redirecting the user
    }
  };

  const handleError = (error) => {
    console.error("Error scanning QR Code:", error);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Header */}
      <header className="w-full py-4 bg-primary text-white text-center">
        <h1 className="text-2xl font-semibold">QR Code Scanner</h1>
      </header>

      {/* Main Scanner Area */}
      <main className="flex flex-col items-center justify-center w-full flex-grow p-5">
        <div className="w-full max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
          <Scanner
            onDecode={handleScan}
            onError={handleError}
            containerStyle={{ width: "100%", height: "300px" }}
          />

          <p className="text-center mt-4 text-gray-600">
            Point the camera at the QR code to scan
          </p>
        </div>

        {/* Retry Button */}
        <button
          onClick={() => window.location.reload()} // Replace with retry logic if necessary
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
  );
};

export default QRCodeScannerUI;
