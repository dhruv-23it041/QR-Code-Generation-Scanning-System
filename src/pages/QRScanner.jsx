import React, { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

const QRCodeScanner = () => {
  const qrRef = useRef(null);

  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader");
    const config = { fps: 10, qrbox: 250 };

    html5QrCode.start(
      { facingMode: "environment" },
      config,
      (decodedText) => {
        console.log("Scanned:", decodedText);
        html5QrCode.stop();
      },
      (err) => {
        console.warn("Scan error:", err);
      }
    );

    return () => {
      html5QrCode.stop().catch((err) => console.log("Failed to stop", err));
    };
  }, []);

  return (
    <div>
      <h2>QR Code Scanner</h2>
      <div id="reader" ref={qrRef} style={{ width: "300px" }}></div>
    </div>
  );
};

export default QRCodeScanner;
