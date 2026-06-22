"use client";
import { useState } from "react";
import { Share2 } from "lucide-react";

interface ShareButtonProps {
  variant?: "icon" | "full";
  resi: string;
}

function ShareButton({ variant = "icon", resi }: ShareButtonProps) {
  const [showErrorShare, setShowErrorShare] = useState(false);
  const throwErrorShare = () => {
    setShowErrorShare(true);
    setTimeout(() => setShowErrorShare(false), 1200);
  };

  const shareReceipt = async () => {
    const el = document.getElementById("receipt-export");
    if (!el) return throwErrorShare();

    const html2canvas = (await import("html2canvas")).default;
    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      ignoreElements: (node) =>
        node instanceof HTMLElement && node.dataset["skipExport"] === "true",
    });

    const img = canvas.toDataURL("image/png");

    // bikin file
    const blob = await (await fetch(img)).blob();
    const file = new File([blob], "receipt.png", { type: "image/png" });

    // fungsi download
    const forceDownload = () => {
      const link = document.createElement("a");
      link.download = `receipt_${resi}.png`;
      link.href = img;
      link.click();
    };

    // kalau bisa share → share
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          title: "My Nusantara Receipt",
          text: "Here’s my digital receipt from Nusantara Journey Card 🌏",
          files: [file],
        });
      } catch {
        throwErrorShare();
        forceDownload();
      }
    } else {
      throwErrorShare();
      forceDownload();
    }
  };

  return (
    <div>
      {showErrorShare && (
        <div
          className="fixed top-4 left-1/2 -translate-x-1/2 
          bg-red-600 text-white font-semibold 
          border border-white px-3 py-1 rounded 
          shadow-lg"
        >
          Perangkat ini tidak mendukung fitur berbagi; resi akan diunduh sebagai
          alternatif.
        </div>
      )}

      {variant === "icon" ? (
        <button
          onClick={shareReceipt}
          className="transition duration-200 hover:scale-110 hover:text-posOrange"
        >
          <Share2 size={16} />
        </button>
      ) : (
        <button
          onClick={shareReceipt}
          className="w-full px-4 py-4 bg-white text-posBlue font-semibold border border-gray-200 rounded-xl flex items-center justify-center gap-4 text-base shadow-sm
               transition duration-200 hover:shadow-md hover:border-gray-300"
        >
          <Share2 size={24} className="text-posOrange shrink-0" />
          Bagikan
        </button>
      )}
    </div>
  );
}

export default ShareButton;
