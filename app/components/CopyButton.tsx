"use client";
import { useState } from "react";
import { Copy } from "lucide-react";
import { usePathname } from "next/navigation";

interface CopyButtonProps {
  variant?: "icon" | "full";
}

function CopyButton({ variant = "icon" }: CopyButtonProps) {
  const pathname = usePathname();
  const [showCopied, setShowCopied] = useState(false);

  const copyReceipt = async () => {
    if (typeof window === "undefined") return;

    const link = `${window.location.origin}${pathname}`;
    if (!link) return;

    await navigator.clipboard.writeText(link);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 1200);
  };

  return (
    <div>
      {showCopied && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-white text-posBlue font-semibold border border-posBlue px-3 py-1 rounded shadow-lg">
          Link berhasil disalin!
        </div>
      )}

      {variant === "icon" ? (
        <button
          onClick={copyReceipt}
          className="transition duration-200 hover:scale-110 hover:text-posOrange"
        >
          <Copy size={16} />
        </button>
      ) : (
        <button
          onClick={copyReceipt}
          className="w-full px-4 py-4 bg-white text-posBlue font-semibold border border-gray-200 rounded-xl flex items-center justify-center gap-4 text-base shadow-sm
               transition duration-200 hover:shadow-md hover:border-gray-300"
        >
          <Copy size={24} className="text-posOrange shrink-0" />
          Salin
        </button>
      )}
    </div>
  );
}

export default CopyButton;
