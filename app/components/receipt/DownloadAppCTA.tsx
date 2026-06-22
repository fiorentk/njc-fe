import { QRCodeSVG } from "qrcode.react";

export default function DownloadAppCTA() {
  return (
    <div className="bg-white rounded-[20px] border border-gray-100 p-6">
      <h3 className="font-bold text-lg text-posBlue mb-1">
        Download Aplikasi Pospay & PosAja!
      </h3>
      <p className="text-gray-600 text-sm mb-5">
        Kirim, bayar, dan lacak paket semua bisa dalam satu aplikasi
      </p>

      <div className="flex items-center justify-center gap-6">
        <div className="flex flex-col items-center">
          <div className="bg-gray-50 p-2 rounded-lg border border-gray-200">
            <QRCodeSVG
              value="https://posindonesia.co.id/download"
              size={96}
            />
          </div>
          <span className="text-gray-500 text-xs mt-2 font-medium">Click or Scan</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img
            src="/pospay-logo.png"
            alt="POSPAY"
            className="h-9 object-contain"
          />
          <img
            src="/posaja-logo.png"
            alt="PosAja"
            className="h-9 object-contain"
          />
          <span className="text-gray-500 text-xs font-medium">
            Tersedia di iOS &amp; Android
          </span>
        </div>
      </div>
    </div>
  );
}
