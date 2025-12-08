"use client";
import { useState } from "react";
import { Download } from "lucide-react";
const html2canvas = (await import("html2canvas")).default;

interface DownloadButtonProps {
  variant?: "icon" | "full";
  resi: string;
}

function DownloadButton({ variant = "icon", resi }: DownloadButtonProps) {
  const [showErrorDownload, setShowErrorDownload] = useState(false);
  const throwErrorDownload = () => {
    setShowErrorDownload(true);
    setTimeout(() => setShowErrorDownload(false), 1200);
  };

  const downloadReceipt = async () => {
    const el = document.getElementById("receipt");
    if (!el) return throwErrorDownload();

    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
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
        className="px-4 py-2 bg-white text-posOrange font-semibold border border-posOrange rounded-lg flex items-center gap-2"
      >
        <Download size={16} />
        Unduh Resi
      </button>
    </div>
  );
}

export default DownloadButton;
