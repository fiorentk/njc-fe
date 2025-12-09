"use client";
import { useState, useEffect } from "react";
import { Copy } from "lucide-react";
import { usePathname } from "next/navigation";

interface CopyButtonProps {
  variant?: "icon" | "full";
}

function CopyButton({ variant = "icon" }: CopyButtonProps) {
  const pathname = usePathname();
  const [link, setLink] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLink(`${window.location.origin}${pathname}`);
    }
  }, [pathname]);

  const [showCopied, setShowCopied] = useState(false);

  const copyReceipt = async () => {
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
        <button onClick={copyReceipt}>
          <Copy size={16} />
        </button>
      ) : (
        <button
          onClick={copyReceipt}
          className="px-2 py-2 bg-white text-posOrange font-semibold border border-posOrange rounded-lg flex items-center gap-2 text-sm"
        >
          <Copy size={18} />
          Salin Resi
        </button>
      )}
    </div>
  );
}

export default CopyButton;
