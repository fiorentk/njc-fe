"use client";

import { useState } from "react";

export default function App() {
  const [receiverPhone, setReceiverPhone] = useState("");
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "error" | "success";
  }>({
    show: false,
    message: "",
    type: "error",
  });

  const showToast = (message: string, type: "error" | "success" = "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3000);
  };

  // Helper: Clean and validate phone number
  const validatePhoneNumber = (
    input: string
  ): { isValid: boolean; cleaned: string } => {
    // Remove all non-digit characters
    const digitsOnly = input.replace(/\D/g, "");

    // Handle common Indonesian prefixes
    let normalized = digitsOnly;
    if (digitsOnly.startsWith("0")) {
      normalized = `62${digitsOnly.slice(1)}`; // Convert 08xx to 628xx
    } else if (digitsOnly.startsWith("628")) {
      normalized = digitsOnly;
    } else if (digitsOnly.startsWith("8") && digitsOnly.length >= 10) {
      normalized = `62${digitsOnly}`; // Assume missing country code
    }

    // Must be 10-15 digits total, and start with 628
    const isValid =
      normalized.length >= 10 &&
      normalized.length <= 15 &&
      normalized.startsWith("628");

    return { isValid, cleaned: normalized };
  };

  const sendWA = async () => {
    if (!receiverPhone.trim()) {
      showToast("Nomor HP harus diisi");
      return;
    }

    const { isValid, cleaned } = validatePhoneNumber(receiverPhone);
    if (!isValid) {
      showToast("Nomor HP tidak valid. Harap isi dengan benar.");
      return;
    }

    try {
      const res = await fetch("/api/send-wa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: cleaned }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("API Error:", errorData);
        showToast("Gagal mengirim pesan WhatsApp. Coba lagi.");
        return;
      }

      window.location.href = "/result";
    } catch (err) {
      console.error("Network error:", err);
      showToast("Terjadi kesalahan jaringan. Periksa koneksi Anda.");
    }
  };

  const handleNext = async () => {
    await sendWA();
  };

  // Handle input to prevent non-digit characters (except +)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    // Allow digits, plus sign, and spaces (we'll clean later)
    value = value.replace(/[^\d+]/g, "");
    setReceiverPhone(value);
  };

  // Hardcoded sender & receiver
  const sender = {
    name: "TOKO UMKM SPIRAL BERWARNA • 081xxxxxxxx",
    address: "J** B***** N* 7 B******* P******** J*** T****",
  };

  const receiver = {
    name: "Nurul",
    address: "J** K***** H*** M******* A*** N* 7 S*******",
  };

  const product = "Jilbab Musantara Special";

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 relative">
      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-lg text-white shadow-lg transition-opacity duration-300 ${
            toast.type === "error" ? "bg-red-500" : "bg-green-500"
          }`}
          style={{
            animation:
              "slideInRight 0.3s ease-out forwards, fadeOut 0.3s ease-out 2.7s forwards",
          }}
        >
          {toast.message}
        </div>
      )}

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

      <div className="grid grid-cols-1 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Sender */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3 sm:mb-4">
              Detail pengirim
            </h3>
            <div className="space-y-3">
              <p className="font-semibold text-sm sm:text-base">
                {sender.name}
              </p>
              <p className="text-sm text-gray-600 whitespace-pre-line">
                {sender.address}
              </p>
              <button className="mt-2 text-sm text-blue-600 border border-blue-200 rounded px-3 py-1 hover:bg-blue-50">
                Ubah
              </button>
            </div>
          </div>

          {/* Receiver */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3 sm:mb-4">
              Detail penerima
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Penerima
                </label>
                <input
                  type="text"
                  value={receiver.name}
                  readOnly
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alamat
                </label>
                <textarea
                  value={receiver.address}
                  readOnly
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed text-sm"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  value={receiverPhone}
                  onChange={handlePhoneChange}
                  placeholder="Contoh: 081234567890"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Nomor harus diawali dengan 08 atau 628 (10-15 digit)
                </p>
              </div>
            </div>
          </div>

          {/* Produk */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
              <h3 className="text-sm font-medium text-gray-700">
                Daftar Produk
              </h3>
              <div className="relative w-full sm:w-auto">
                <div className="flex">
                  <input
                    type="text"
                    className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm"
                    placeholder="Nama produk"
                  />
                  <button className="bg-blue-600 text-white px-3 py-2 rounded-r-md hover:bg-blue-700 transition-colors text-sm whitespace-nowrap">
                    Tambah
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-md gap-2">
                <span className="flex-1 text-sm">{product}</span>
                <button className="text-red-600 hover:text-red-800 text-sm text-center sm:text-left">
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-4 sm:p-6 sticky top-6">
            <button
              onClick={handleNext}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors mb-4 text-sm sm:text-base"
            >
              Selanjutnya
            </button>

            <p className="text-xs text-gray-500 text-center">
              Dengan mengklik tombol selanjutnya, anda telah menyetujui{" "}
              <a href="#" className="text-blue-600 hover:underline text-xs">
                syarat dan ketentuan kirim
              </a>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
