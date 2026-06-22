"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const router = useRouter();
  const [isFileUploaded, setIsFileUploaded] = useState(true);
  const [selectedService, setSelectedService] = useState("Pos Reguler");
  const [isLoading, setIsLoading] = useState(false);

  // Mock file data (simulating an uploaded file)
  const uploadedFile = {
    name: "Pesanan PosAja UMKM.xlsx",
    size: "52.03 KB",
    type: "xlsx",
  };

  const handleDeleteFile = () => {
    setIsFileUploaded(false);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Redirect to result page
      router.push("/result-batch");
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Gagal mengirim file. Silakan coba lagi.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <div className="text-orange-600 font-bold text-xl">PosAja</div>
          <div className="text-gray-500 text-sm">umkm</div>
        </div>
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
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Unggah File
        </h2>

        {/* Instructions */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6">
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
            <li>Download format excel terbaru, PANDUAN ada di Sheet 2</li>
            <li>Isi Produk/Layanan</li>
            <li>Isi semua data pada excel yang tersedia</li>
            <li>
              Pindahkan kolom &quot;Status COD&quot;:
              <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>
                  a. COD : Ongkos kirim dan bea admin dibayar penjual (Bea Admin
                  sebesar 2% dari nilai cod)
                </li>
                <li>
                  b. CCOD : Ongkos kirim dan bea admin ditanggung penerima (Bea
                  Admin sebesar 2% dari nilai cod + ongkos kirim)
                </li>
                <li>c. NON COD : Jika bukan kiriman COD</li>
              </ul>
            </li>
            <li>Upload excel</li>
          </ol>

          <button className="mt-4 flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-100">
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
              <path d="M21 15v4a2 2 0 002 2H3a2 2 0 002-2v-4m7-4l3 3m0 0l3-3m-3 3V4"></path>
            </svg>
            <span>Download Template</span>
          </button>
        </div>

        {/* File Upload Area */}
        {isFileUploaded ? (
          <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6">
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <p className="text-sm text-gray-700 mb-1">{uploadedFile.name}</p>
              <p className="text-xs text-gray-500 mb-3">{uploadedFile.size}</p>
              <button
                onClick={handleDeleteFile}
                className="flex items-center space-x-1 text-red-600 border border-red-300 rounded px-3 py-1 text-xs hover:bg-red-50"
              >
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
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
                <span>Hapus File</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6">
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400 mb-3"
              >
                <path d="M21 15v4a2 2 0 002 2H3a2 2 0 002-2v-4m7-4l3 3m0 0l3-3m-3 3V4"></path>
              </svg>
              <p className="text-sm text-gray-700 mb-1">
                Drag & drop file atau klik untuk memilih
              </p>
              <p className="text-xs text-gray-500">
                Format: .xlsx, .xls (Maks. 5MB)
              </p>
            </div>
          </div>
        )}

        {/* Shipping Service Selection */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Layanan Pengiriman
          </label>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="Pos Reguler">Pos Reguler</option>
            <option value="Pos Nexy Day">Pos Next Day</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={isLoading || !isFileUploaded}
            className={`py-3 px-6 rounded-lg font-medium text-sm sm:text-base transition-colors flex items-center justify-center ${
              isLoading || !isFileUploaded
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                Mengirim...
              </>
            ) : (
              "Kirim"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
