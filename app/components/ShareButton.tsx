"use client";
import { useState } from "react";
import { Share2 } from "lucide-react";
const html2canvas = (await import("html2canvas")).default;

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
    const el = document.getElementById("receipt");
    if (!el) return throwErrorShare();

    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
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
      } catch (err) {
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
          className="px-2 py-2 bg-white text-posOrange font-semibold border border-posOrange rounded-lg flex items-center gap-2 text-sm
               transition duration-200 hover:bg-posOrange hover:text-white hover:shadow-md"
        >
          <Share2 size={18} />
          Bagikan Resi
        </button>
      )}
    </div>
  );
}

export default ShareButton;
