"use client";
import { useState } from "react";
import { Copy } from "lucide-react";

interface CopyButtonProps {
  link: string;
  variant?: "icon" | "full";
}

function CopyButton({ link, variant = "icon" }: CopyButtonProps) {
  const [showCopied, setShowCopied] = useState(false);
  const copyReceipt = async () => {
    navigator.clipboard.writeText(link);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 1200);
  };

  return (
    <div>
      {showCopied && (
        <div
          className="fixed top-4 left-1/2 -translate-x-1/2 
               bg-white text-posBlue font-semibold 
               border border-posBlue px-3 py-1 rounded 
               shadow-lg"
        >
          Link Successfully Copied!
        </div>
      )}

      {variant === "icon" ? (
        <button onClick={copyReceipt}>
          <Copy size={16} />
        </button>
      ) : (
        <button
          onClick={copyReceipt}
          className="px-4 py-2 bg-white text-posOrange font-semibold border border-posOrange rounded-lg flex items-center gap-2"
        >
          <Copy size={18} />
          Salin Resi
        </button>
      )}
    </div>
  );
}

export default CopyButton;
