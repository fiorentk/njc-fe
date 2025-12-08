export default function page() {
  return (
    <div className="min-h-screen flex flex-col scroll-auto">
      {/* NAV */}
      <nav className="flex h-16 items-center">
        <img
          className="h-16 object-contain p-1"
          src="posind-logo.png"
          alt="posind-logo"
        />
      </nav>
      {/* BODY */}
      <main className="flex flex-1 bg-gradient-to-b min-w-max from-posBlue from-50% to-gradientCus justify-center">
        <div className="flex flex-col flex-1 m-4 md:m-12 w-full max-w-[900px] bg-gray-50 rounded-md">
          {/* TITLE MAIN CARD */}
          <div className="flex bg-posOrange rounded-t-md items-center p-4 relative">
            {/* TITLE */}
            <div className="flex-1 flex flex-col items-center justify-center text-white text-center px-2">
              <span className="text-xl md:text-3xl font-black whitespace-normal break-words">
                Tips Berjualan Online Mudah dengan POSAJA UMKM
              </span>
            </div>
          </div>
          {/* PICTURE */}
          <div className="my-2 mx-8 h-[150px] md:h-[250px] overflow-hidden rounded-md">
            <img
              src="ads-1-full.png"
              alt="ads-1"
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 20%" }}
            />
          </div>
          {/* TEXT */}
          <div className="my-2 mx-8 space-y-4 text-gray-800 break-words">
            <p>
              Di era digital seperti sekarang, pelaku UMKM tidak lagi harus
              ribet untuk mulai berjualan online. Dengan hadirnya POSAJA UMKM,
              proses jualan menjadi jauh lebih praktis—mulai dari pengelolaan
              pesanan hingga pengiriman barang ke pelanggan. Agar pengalaman
              berjualanmu makin optimal, berikut beberapa tips berjualan online
              mudah yang bisa kamu terapkan:
            </p>

            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Manfaatkan Fitur Pengelolaan Pesanan</strong>
                <br />
                Salah satu kunci sukses jualan online adalah kemampuan mengatur
                pesanan dengan rapi. POSAJA UMKM membantu kamu memantau seluruh
                order dalam satu dashboard, sehingga kamu tidak perlu lagi
                mencatat secara manual. Dengan alur yang lebih tertata, risiko
                human error juga berkurang.
              </li>
              <li>
                <strong>Gunakan Layanan Pengiriman Terintegrasi</strong>
                <br />
                Dengan POSAJA, kamu bisa langsung membuat resi dan mengatur
                pengiriman tanpa keluar dari aplikasi. Ini sangat memudahkan,
                terutama bagi UMKM yang menangani banyak pesanan setiap harinya.
                Prosesnya cepat, mudah, dan pastinya efisien.
              </li>
              <li>
                <strong>Berikan Update Pengiriman Secara Real-Time</strong>
                <br />
                Pelanggan akan sangat senang jika mendapatkan informasi
                pengiriman yang jelas dan real-time. Melalui POSAJA UMKM, setiap
                resi sudah terhubung dengan sistem pelacakan yang lebih akurat.
                Semakin transparan proses pengirimanmu, semakin besar
                kepercayaan pelanggan.
              </li>
              <li>
                <strong>Gunakan Deskripsi Produk yang Jelas</strong>
                <br />
                Foto yang menarik dan deskripsi yang informatif akan membuat
                produkmu lebih mudah terjual. Sertakan informasi penting seperti
                ukuran, bahan, warna, cara penggunaan, serta kelebihan produk.
                Pastikan semuanya jelas agar calon pembeli tidak ragu.
              </li>
              <li>
                <strong>Analisis Riwayat Transaksi</strong>
                <br />
                POSAJA UMKM menyediakan riwayat transaksi lengkap yang
                memudahkan kamu memahami tren penjualan. Dengan data ini, kamu
                bisa melihat produk apa yang paling laris, kapan waktu ramai
                pembelian, hingga strategi apa yang harus diperbaiki.
              </li>
              <li>
                <strong>Berikan Pelayanan Responsif</strong>
                <br />
                Pembeli online sangat menghargai penjual yang cepat merespons
                chat atau pertanyaan. Semakin responsif kamu, semakin besar
                peluang closing. Ditambah integrasi POSAJA yang memudahkan
                proses transaksi, pelayananmu akan terlihat lebih profesional.
              </li>
            </ol>

            <p>
              Berjualan online tidak harus rumit. Dengan POSAJA UMKM, kamu bisa
              mengelola bisnis lebih efisien, meningkatkan kepuasan pelanggan,
              dan mengembangkan usaha tanpa harus menguasai teknologi yang
              rumit. Yuk, mulai optimalkan bisnis kamu dan rasakan kemudahan
              jualan online sekarang!
            </p>
          </div>
          {/* Anda Mungkin Tertarik */}
          <div className="my-2 mx-8 flex">
            <div className="w-full border-t border-dashed border-posBlue my-4"></div>
            <div className="text-posBlue p-1 min-w-max">
              Anda Mungkin Tertarik
            </div>
            <div className="w-full border-t border-dashed border-posBlue my-4"></div>
          </div>
          {/* Ads Content */}
          <div className="m-4 flex flex-col md:flex-row gap-4 items-center">
            {/* Ads 1 */}
            <div className="flex w-[450px] h-28 p-2 shrink-0 bg-gray-100 rounded-md text-posBlue shadow-lg">
              <img
                src="/ads-1.png"
                alt="ads-1"
                className="h-20 object-contain mr-3 self-center rounded"
              />

              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold">
                  Tips Berjualan Online Mudah dengan POSAJA UMKM
                </span>

                <span className="text-xs leading-snug">
                  Belanja online adalah tren baru yang terjadi di masyarakat
                  pada saat ini. Berikut adalah tips agar penjualan dan kiriman
                  mu bisa lebih efisien... Baca Lebih Lanjut
                </span>
              </div>
            </div>

            {/* Ads 2 */}
            <div className="flex w-[450px] h-28 p-2 shrink-0 bg-gray-100 rounded-md text-posBlue shadow-lg">
              <img
                src="/ads-2.png"
                alt="ads-2"
                className="h-20 object-contain mr-3 self-center rounded"
              />

              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold">
                  Jangan Ketinggalan Ini Cara Berjualan Online 2025
                </span>

                <span className="text-xs leading-snug">
                  Belanja online adalah tren baru yang terjadi di masyarakat
                  pada saat ini. Berikut adalah tips agar penjualan dan kiriman
                  mu bisa lebih efisien... Baca Lebih Lanjut
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* FOOTER */}
      <footer className="h-20"></footer>
    </div>
  );
}
