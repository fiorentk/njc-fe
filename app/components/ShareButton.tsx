"use client";
import { useState } from "react";
import { Share2 } from "lucide-react";
const html2canvas = (await import("html2canvas")).default;

interface ShareButtonProps {
  variant?: "icon" | "full";
}

function ShareButton({ variant = "icon" }: ShareButtonProps) {
  const [showErrorShare, setShowErrorShare] = useState(false);
  const throwErrorShare = () => {
    setShowErrorShare(true);
    setTimeout(() => setShowErrorShare(false), 1200);
  };
  const shareReceipt = async () => {
    const el = document.getElementById("receipt");
    if (!el) return throwErrorShare();

    const canvas = await html2canvas(el, { scale: 2 });
    const img = canvas.toDataURL("image/png");
    const blob = await (await fetch(img)).blob();
    const file = new File([blob], "receipt.png", { type: "image/png" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: "My Nusantara Receipt",
        text: "Here’s my digital receipt from Nusantara Journey Card 🌏",
        files: [file],
      });
    } else {
      throwErrorShare();
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
          Sharing not supported on this device/browser.
        </div>
      )}
      {variant === "icon" ? (
        <button>
          <Share2 size={16} onClick={shareReceipt} />
        </button>
      ) : (
        <button
          onClick={shareReceipt}
          className="px-4 py-2 bg-white text-posOrange font-semibold border border-posOrange rounded-lg flex items-center gap-2"
        >
          <Share2 size={18} />
          Bagikan Resi
        </button>
      )}
    </div>
  );
}

export default ShareButton;
