"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Copy, Download } from "lucide-react";

interface ResultItem {
  id: number;
  trackingNumber: string;
  sender: string;
  receiver: string;
  senderAddress: string;
  receiverAddress: string;
  phone: string;
  shippingService: string;
  codStatus: string;
  inputStatus: string;
  blastStatus: string;
  isSuccessful: boolean;
  isBlastSuccessful: boolean;
}

export default function ResultPage() {
  const [results, setResults] = useState<ResultItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  // New mock data adapted to ResultItem structure
  useEffect(() => {
    const mockResults: ResultItem[] = [
      {
        id: 1,
        trackingNumber: "P2021304810014",
        sender: "Putri",
        receiver: "Nurul",
        senderAddress: "J** B***** N* 7 B******* P******** J*** T****",
        receiverAddress: "J** K***** H*** M******* A*** N* 7 S*******",
        phone: "081234567890", // Not provided — left empty
        shippingService: "POS REGULER",
        codStatus: "NON-COD", // inferred
        inputStatus: "BERHASIL INPUT",
        blastStatus: "BERHASIL BLAST",
        isSuccessful: true,
        isBlastSuccessful: true,
      },
      {
        id: 2,
        trackingNumber: "P2021304810015",
        sender: "Bambang",
        receiver: "Angga",
        senderAddress: "J** B***** N* 7 B******* P******** J*** T****",
        receiverAddress: "J** K***** H*** M******* A*** N* 7 S*******",
        phone: "",
        shippingService: "POS REGULER",
        codStatus: "NON-COD",
        inputStatus: "BERHASIL",
        blastStatus: "GAGAL",
        isSuccessful: true,
        isBlastSuccessful: false,
      },
      {
        id: 3,
        trackingNumber: "P2021304810016",
        sender: "Abdul",
        receiver: "Rosyid",
        senderAddress: "J** B***** N* 7 B******* P******** J*** T****",
        receiverAddress: "J** K***** H*** M******* A*** N* 7 S*******",
        phone: "081234567890",
        shippingService: "POS REGULER",
        codStatus: "NON-COD",
        inputStatus: "BERHASIL",
        blastStatus: "BERHASIL",
        isSuccessful: true,
        isBlastSuccessful: true,
      },
      {
        id: 4,
        trackingNumber: "P2021304810017",
        sender: "Rosa",
        receiver: "Andini",
        senderAddress: "J** B***** N* 7 B******* P******** J*** T****",
        receiverAddress: "J** K***** H*** M******* A*** N* 7 S*******",
        phone: "081234567890",
        shippingService: "POS REGULER",
        codStatus: "NON-COD",
        inputStatus: "BERHASIL",
        blastStatus: "BERHASIL",
        isSuccessful: true,
        isBlastSuccessful: true,
      },
    ];

    const timer = setTimeout(() => {
      setResults(mockResults);
      setIsLoading(false);
      setExpandedCards(new Set([1])); // Expand first by default
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleExportExcel = (): void => {
    alert("File Excel akan diunduh...");
  };

  const toggleCard = (id: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // Optional: show visual feedback like toast if needed later
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="animate-spin h-6 w-6 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
          <span className="text-gray-700">Memuat hasil...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <div className="text-orange-600 font-bold text-xl">PosAja</div>
          <div className="text-gray-500 text-sm">umkm</div>
        </div>
        <Link href="/form-batch">
          <button className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-100 justify-center w-full sm:w-auto">
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

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-3">
            BERHASIL DIPROSES!
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Pengiriman Anda telah berhasil diproses dan siap dikirim.
          </p>
        </div>

        {/* Results List */}
        <div className="space-y-4 mb-6">
          {results.map((result) => (
            <div
              key={result.id}
              className={`bg-white rounded-lg shadow transition-all duration-300 ${
                expandedCards.has(result.id) ? "p-4 sm:p-6" : "p-4"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between mb-3">
                <div className="flex flex-wrap gap-2 mb-2 sm:mb-0">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      result.isSuccessful
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {result.inputStatus}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      result.isBlastSuccessful
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {result.blastStatus}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-700">
                    {result.trackingNumber}
                  </span>
                  <button
                    onClick={() => toggleCard(result.id)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {expandedCards.has(result.id) ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {expandedCards.has(result.id) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-xs font-medium text-gray-500">
                        PENGIRIM
                      </span>
                      <span className="text-sm font-medium">
                        {result.sender}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs font-medium text-gray-500">
                        PENERIMA
                      </span>
                      <span className="text-sm font-medium">
                        {result.receiver}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs font-medium text-gray-500">
                        ALAMAT KIRIM
                      </span>
                      <span className="text-sm font-medium">
                        {result.senderAddress}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs font-medium text-gray-500">
                        ALAMAT TERIMA
                      </span>
                      <span className="text-sm font-medium">
                        {result.receiverAddress}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs font-medium text-gray-500">
                        NO HP
                      </span>
                      <span className="text-sm font-medium">
                        {result.phone || "-"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs font-medium text-gray-500">
                        JENIS KIRIMAN
                      </span>
                      <span className="text-sm font-medium">
                        {result.shippingService}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs font-medium text-gray-500">
                        COD/CCOD/NON
                      </span>
                      <span className="text-sm font-medium">
                        {result.codStatus}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">
                          STATUS INPUT
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            result.isSuccessful
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {result.inputStatus}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">
                          STATUS BLAST
                        </span>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              result.isBlastSuccessful
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {result.blastStatus}
                          </span>

                          <button
                            onClick={() =>
                              copyToClipboard(
                                `resipos.vercel.app/resi/${result.trackingNumber}`
                              )
                            }
                            className="flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-2 py-1 rounded hover:bg-blue-100"
                          >
                            <Copy className="h-3 w-3" />
                            <span>COPY LINK RESI</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Export Button */}
        <div className="flex justify-center">
          <button
            onClick={handleExportExcel}
            className="py-3 px-6 bg-blue-600 text-white rounded-lg font-medium text-sm sm:text-base hover:bg-blue-700 transition-colors w-full sm:w-auto flex items-center justify-center space-x-2"
          >
            <Download className="h-4 w-4" />
            <span>EXPORT EXCEL</span>
          </button>
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
