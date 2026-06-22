import { QRCodeSVG } from "qrcode.react";

const LINK_URL = "https://linktr.ee/lasingan";

export default function DownloadAppCTA() {
  return (
    <div className="bg-white rounded-[20px] border border-gray-100 p-6">
      <h3 className="font-bold text-lg text-posBlue mb-1">
        Download Aplikasi Pospay &amp; PosAja!
      </h3>
      <p className="text-gray-600 text-sm mb-5">
        Kirim, bayar, dan lacak paket semua bisa dalam satu aplikasi
      </p>

      <div className="flex items-center justify-center gap-6">
        <a
          href={LINK_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download aplikasi Pospay dan PosAja"
          className="flex flex-col items-center"
        >
          <div className="bg-gray-50 p-2 rounded-lg border border-gray-200">
            <QRCodeSVG
              value={LINK_URL}
              size={96}
            />
          </div>
          <span className="text-gray-500 text-xs mt-2 font-medium">Click or Scan</span>
        </a>

        <div className="flex flex-col items-center gap-2">
          <a href={LINK_URL} target="_blank" rel="noopener noreferrer" aria-label="Pospay">
            <img
              src="/pospay-logo.png"
              alt="POSPAY"
              className="h-9 object-contain"
            />
          </a>
          <a href={LINK_URL} target="_blank" rel="noopener noreferrer" aria-label="PosAja">
            <img
              src="/posaja-logo.png"
              alt="PosAja"
              className="h-9 object-contain"
            />
          </a>
          <span className="text-gray-500 text-xs font-medium">
            Tersedia di iOS &amp; Android
          </span>
        </div>
      </div>
    </div>
  );
}
