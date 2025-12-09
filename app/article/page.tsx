export default function page() {
  return (
    <div className="scroll-auto min-h-screen bg-gradient-to-b from-posBlue from-50% to-gradientCus">
      {/* NAV */}
      <nav className="w-full flex justify-start bg-white backdrop-blur px-2">
        <img
          src="posind-logo.png"
          alt="posind-logo"
          className="h-8 sm:h-10 md:h-12 p-1"
        />
      </nav>

      {/* BODY */}
      <main className="w-full flex justify-center px-2 sm:px-4 py-4 sm:py-6">
        {/* ARTICLE CARD */}
        <div className="bg-gray-50 w-full max-w-3xl rounded-xl shadow-xl overflow-hidden">
          {/* TITLE */}
          <div className="bg-posOrange px-3 sm:px-5 py-3 sm:py-4">
            <h1 className="text-white text-center font-black break-words text-base sm:text-xl md:text-2xl lg:text-3xl leading-snug">
              Tips Berjualan Online Mudah dengan POSAJA UMKM
            </h1>
          </div>

          {/* IMAGE */}
          <div className="w-full">
            <img
              src="ads-1-full.png"
              alt="ads-1"
              className="w-full h-40 sm:h-52 md:h-64 lg:h-72 object-cover"
              style={{ objectPosition: "50% 20%" }}
            />
          </div>

          {/* TEXT */}
          <div className="text-gray-800 break-words space-y-3 px-3 sm:px-5 py-4 text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed">
            <p>
              Di era digital seperti sekarang, pelaku UMKM tidak lagi harus
              ribet untuk mulai berjualan online. Dengan hadirnya POSAJA UMKM,
              proses jualan menjadi jauh lebih praktis — mulai dari pengelolaan
              pesanan hingga pengiriman barang ke pelanggan. Agar pengalaman
              berjualanmu makin optimal, berikut beberapa tips berjualan online
              mudah yang bisa kamu terapkan:
            </p>

            <div className="space-y-3">
              <div>
                <div className="font-semibold text-[11px] sm:text-xs md:text-sm lg:text-base">
                  1. Manfaatkan Fitur Pengelolaan Pesanan
                </div>
                <p className="mt-1">
                  Salah satu kunci sukses jualan online adalah kemampuan
                  mengatur pesanan dengan rapi. POSAJA UMKM membantu kamu
                  memantau seluruh order dalam satu dashboard, sehingga kamu
                  tidak perlu lagi mencatat secara manual.
                </p>
              </div>

              <div>
                <div className="font-semibold text-[11px] sm:text-xs md:text-sm lg:text-base">
                  2. Gunakan Layanan Pengiriman Terintegrasi
                </div>
                <p className="mt-1">
                  Kamu bisa langsung membuat resi dan mengatur pengiriman tanpa
                  keluar dari aplikasi. Prosesnya cepat, mudah, dan efisien.
                </p>
              </div>

              <div>
                <div className="font-semibold text-[11px] sm:text-xs md:text-sm lg:text-base">
                  3. Berikan Update Pengiriman Real-Time
                </div>
                <p className="mt-1">
                  Informasi pengiriman real-time bikin pelanggan makin percaya
                  dengan toko kamu.
                </p>
              </div>

              <div>
                <div className="font-semibold text-[11px] sm:text-xs md:text-sm lg:text-base">
                  4. Gunakan Deskripsi Produk yang Jelas
                </div>
                <p className="mt-1">
                  Sertakan detail penting seperti ukuran, bahan, warna, dan
                  keunggulan produk.
                </p>
              </div>

              <div>
                <div className="font-semibold text-[11px] sm:text-xs md:text-sm lg:text-base">
                  5. Analisis Riwayat Transaksi
                </div>
                <p className="mt-1">
                  Data transaksi bantu kamu tahu produk mana yang paling laku.
                </p>
              </div>

              <div>
                <div className="font-semibold text-[11px] sm:text-xs md:text-sm lg:text-base">
                  6. Berikan Pelayanan Responsif
                </div>
                <p className="mt-1">
                  Fast response bikin peluang closing makin besar.
                </p>
              </div>
            </div>

            <p className="pt-2">
              Berjualan online tidak harus rumit. Dengan POSAJA UMKM, kamu bisa
              mengelola bisnis lebih efisien, meningkatkan kepuasan pelanggan,
              dan mengembangkan usaha tanpa ribet.
            </p>
          </div>

          {/* Divider */}
          <div className="text-posBlue flex items-center gap-2 px-3 sm:px-5 pb-5">
            <div className="flex-1 border-t border-dashed border-posBlue"></div>
            <div className="whitespace-nowrap text-[11px] sm:text-xs md:text-sm font-semibold">
              Anda Mungkin Tertarik
            </div>
            <div className="flex-1 border-t border-dashed border-posBlue"></div>
          </div>

          {/* ADS */}
          <div className="text-posBlue flex flex-col lg:flex-row gap-3 px-3 sm:px-5 pb-5">
            {/* CARD 1 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm flex items-center gap-3 p-2 flex-1">
              <img
                src="/ads-1.png"
                alt="ads-1"
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover flex-shrink-0 rounded-md"
              />
              <div className="flex flex-col justify-center">
                <div className="font-semibold leading-tight text-[11px] sm:text-xs md:text-sm">
                  Tips Berjualan Online Mudah dengan POSAJA UMKM
                </div>
                <div className="text-gray-600 leading-snug text-[10px] sm:text-[11px] md:text-xs line-clamp-2">
                  Belanja online adalah tren baru yang terjadi di masyarakat
                  pada saat ini. Berikut adalah tips agar penjualan dan kiriman
                  mu bisa lebih efisien... Baca Lebih Lanjut
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm flex items-center gap-3 p-2 flex-1">
              <img
                src="/ads-2.png"
                alt="ads-2"
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover flex-shrink-0 rounded-md"
              />
              <div className="flex flex-col justify-center">
                <div className="font-semibold leading-tight text-[11px] sm:text-xs md:text-sm">
                  Jangan Ketinggalan Ini Cara Berjualan Online 2025
                </div>
                <div className="text-gray-600 leading-snug text-[10px] sm:text-[11px] md:text-xs line-clamp-2">
                  Belanja online adalah tren baru yang terjadi di masyarakat
                  pada saat ini. Berikut adalah tips agar penjualan dan kiriman
                  mu bisa lebih efisien... Baca Lebih Lanjut
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="h-8"></footer>
    </div>
  );
}
