"use client";
import { useState } from "react";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  resi: string;
}

function DownloadButton({ resi }: DownloadButtonProps) {
  const [showErrorDownload, setShowErrorDownload] = useState(false);
  const throwErrorDownload = () => {
    setShowErrorDownload(true);
    setTimeout(() => setShowErrorDownload(false), 1200);
  };

  const downloadReceipt = async () => {
    const el = document.getElementById("receipt-export");
    if (!el) return throwErrorDownload();

    const html2canvas = (await import("html2canvas")).default;
    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      ignoreElements: (node) =>
        node instanceof HTMLElement && node.dataset["skipExport"] === "true",
    });
    const img = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.download = `receipt_${resi}.png`;
    link.href = img;
    link.click();
  };
  return (
    <div>
      {showErrorDownload && (
        <div
          className="fixed top-4 left-1/2 -translate-x-1/2 
               bg-red-600 text-white font-semibold 
               border border-white px-3 py-1 rounded 
               shadow-lg"
        >
          Error saat mengunduh resi.
        </div>
      )}
      <button
        onClick={downloadReceipt}
        className="w-full px-4 py-4 bg-white text-posBlue font-semibold border border-gray-200 rounded-xl flex items-center justify-center gap-4 text-base shadow-sm
             transition duration-200 hover:shadow-md hover:border-gray-300"
      >
        <Download size={24} className="text-posOrange shrink-0" />
        Unduh
      </button>
    </div>
  );
}

export default DownloadButton;
