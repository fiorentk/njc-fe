import Link from "next/link";

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
              Reverse Logistics Skincare Kini Bisa Lewat POSAJA!
            </h1>
          </div>

          {/* IMAGE */}
          <div className="w-full">
            <img
              src="ads-2-full.png"
              alt="ads-2"
              className="w-full h-40 sm:h-52 md:h-64 lg:h-72 object-cover"
              style={{ objectPosition: "50% 20%" }}
            />
          </div>

          {/* TEXT */}
          <div className="text-gray-800 break-words space-y-3 px-3 sm:px-5 py-4 text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed">
            <p>
              Industri kecantikan di Indonesia menghasilkan ribuan ton limbah
              kemasan skincare setiap tahun, terutama plastik dan kaca yang
              sulit terurai. Meski banyak brand memiliki komitmen keberlanjutan,
              belum tersedia sistem reverse logistics yang efisien dan mudah
              diakses konsumen. Di sisi lain, Pos Indonesia masih memiliki
              peluang besar di segmen reverse logistics yang belum tergarap
              optimal, padahal didukung jaringan outlet dan logistik yang luas.
            </p>

            <p>
              REPA (Reverse Kemasan dengan PosAja) hadir sebagai solusi
              pengembalian kemasan kosong skincare dari konsumen ke produsen
              melalui loket kantor pos, aplikasi PosAja, atau penjemputan di
              toko skincare. Layanan ini memposisikan Pos Indonesia sebagai
              mitra circular branding bagi brand skincare tanpa memerlukan
              investasi baru, karena memanfaatkan outlet, SDM, armada, serta
              sistem IT yang sudah ada.
            </p>

            <p>
              REPA juga menawarkan program reward bagi konsumen berupa poin
              PosAja atau loyalty program dari brand mitra. Skema ini mendorong
              partisipasi konsumen sekaligus memperkuat citra ramah lingkungan
              bagi brand dan Pos Indonesia.
            </p>

            <p>
              Keunggulan utama REPA adalah peningkatan utilisasi outlet Pos,
              penguatan citra Pos Indonesia sebagai pelopor logistik hijau,
              serta dukungan nyata terhadap program ESG dan ekonomi sirkular
              nasional. Implementasi awal dilakukan melalui pilot project di
              Jabodetabek, Surabaya, dan Medan, dengan menggandeng brand
              skincare berkomitmen keberlanjutan.
            </p>

            <p>
              Dalam 6 bulan, REPA ditargetkan mengumpulkan 50.000 kemasan dengan
              kepuasan konsumen 75% dan pendapatan Rp175 juta. Dalam 24 bulan,
              target meningkat menjadi 500.000 kemasan dan pendapatan Rp1,75
              miliar. REPA menjadi solusi praktis yang memberi manfaat langsung
              bagi lingkungan, brand skincare, dan Pos Indonesia.
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
            <Link href="/article">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm flex items-center gap-3 p-2 flex-1 hover:bg-gray-300">
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
                    pada saat ini. Berikut adalah tips agar penjualan dan
                    kiriman mu bisa lebih efisien... Baca Lebih Lanjut
                  </div>
                </div>
              </div>
            </Link>

            {/* CARD 2 */}
            <Link href="/article-2">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm flex items-center gap-3 p-2 flex-1 hover:bg-gray-300">
                <img
                  src="/ads-2.png"
                  alt="ads-2"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover flex-shrink-0 rounded-md"
                />
                <div className="flex flex-col justify-center">
                  <div className="font-semibold leading-tight text-[11px] sm:text-xs md:text-sm">
                    Reverse Logistics Skincare Kini Bisa Lewat POSAJA!
                  </div>
                  <div className="text-gray-600 leading-snug text-[10px] sm:text-[11px] md:text-xs line-clamp-2">
                    Reverse logistics skincare jadi solusi penting di era
                    belanja online. Dengan POSAJA, proses retur jadi lebih
                    praktis, cepat, dan efisien untuk penjual maupun pembeli...
                    Baca Lebih Lanjut
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <footer className="h-8"></footer>
    </div>
  );
}
