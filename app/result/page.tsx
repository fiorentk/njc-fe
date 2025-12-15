"use client";
import Link from "next/link";

export default function ResultPage() {
  const trackingData = {
    resi: "P2021304810014",
    senderAddress: "J** K***** H*** M******* A*** N* 7 S*******",
    senderName: "TOKO UMKM SPIRAL BERWARNA",
    receiverName: "Nurul",
    status: "BERHASIL",
    link: "https://resipos.vercel.app/resi/P2021304810014",
  };

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <div className="flex items-center space-x-2">
          <div className="text-orange-600 font-bold text-xl">PosAja</div>
          <div className="text-gray-500 text-sm">umkm</div>
        </div>
        <Link href="/form">
          <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7"></path>
            </svg>
            <span>Kembali ke Pesanan</span>
          </button>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Success Message */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-3">
            BERHASIL DIPROSES!
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Pengiriman Anda telah berhasil diproses dan siap dikirim.
          </p>
        </div>

        {/* Desktop Table - Hidden on mobile */}
        <div className="hidden md:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  RESI
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  ALAMAT KIRIM
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  PENGIRIM
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  PENERIMA
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  LINK
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  STATUS BLAST
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-5 whitespace-nowrap text-sm font-medium text-gray-900">
                  {trackingData.resi}
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-700 max-w-xs">
                  <div className="truncate" title={trackingData.senderAddress}>
                    {trackingData.senderAddress}
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-700">
                  {trackingData.senderName}
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-700">
                  {trackingData.receiverName}
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex flex-col space-y-2">
                    <a
                      href={trackingData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-blue-600 hover:bg-blue-50 hover:border-blue-400 transition-colors"
                    >
                      Lihat
                    </a>
                    <button
                      onClick={() => copyToClipboard(trackingData.link)}
                      className="inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Salin
                    </button>
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                    {trackingData.status}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Card View - Shown on mobile/tablet */}
        <div className="md:hidden bg-white rounded-xl shadow-sm border border-gray-200 p-4 space-y-4">
          <div className="text-center py-4">
            <div className="text-2xl font-bold text-green-600 mb-2">RESI</div>
            <div className="text-xl font-mono font-bold text-gray-900 break-all">
              {trackingData.resi}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              ALAMAT KIRIM
            </div>
            <div className="text-sm text-gray-700 break-words leading-relaxed">
              {trackingData.senderAddress}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  PENGIRIM
                </div>
                <div className="text-sm text-gray-700">
                  {trackingData.senderName}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  PENERIMA
                </div>
                <div className="text-sm text-gray-700">
                  {trackingData.receiverName}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              STATUS BLAST
            </div>
            <div className="mt-1">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                {trackingData.status}
              </span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              LINK PELACAKAN
            </div>
            <div className="mt-1 flex flex-col gap-2">
              <a
                href={trackingData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 bg-blue-50 text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
              >
                Lihat Pelacakan
              </a>
              <button
                onClick={() => copyToClipboard(trackingData.link)}
                className="block w-full text-center px-4 py-2 bg-gray-50 text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                Salin Link
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 sm:mt-10 text-center">
          <div className="bg-green-50 rounded-xl p-4 sm:p-6 border border-green-100">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
              Resi ini akan dikirimkan ke nomor HP penerima secara otomatis
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              untuk memudahkan pelacakan pengiriman.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
