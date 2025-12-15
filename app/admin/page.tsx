"use client";

import { useState } from "react";

export default function AdminPage() {
  // State for stamp management
  const [stamps, setStamps] = useState([
    {
      id: 1,
      city: "Jakarta",
      imageUrl: "https://placehold.co/200x150/4F46E5/FFFFFF?text=Jakarta",
    },
    {
      id: 2,
      city: "Bandung",
      imageUrl: "https://placehold.co/200x150/059669/FFFFFF?text=Bandung",
    },
    {
      id: 3,
      city: "Surabaya",
      imageUrl: "https://placehold.co/200x150/DC2626/FFFFFF?text=Surabaya",
    },
  ]);

  const [newCity, setNewCity] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");

  // State for articles - matching the exact structure from the provided article pages
  const [article1, setArticle1] = useState({
    title: "Tips Berjualan Online Mudah dengan POSAJA UMKM",
    image: "ads-1-full.png",
    content: `Di era digital seperti sekarang, pelaku UMKM tidak lagi harus ribet untuk mulai berjualan online. Dengan hadirnya POSAJA UMKM, proses jualan menjadi jauh lebih praktis — mulai dari pengelolaan pesanan hingga pengiriman barang ke pelanggan. Agar pengalaman berjualanmu makin optimal, berikut beberapa tips berjualan online mudah yang bisa kamu terapkan:

1. Manfaatkan Fitur Pengelolaan Pesanan
Salah satu kunci sukses jualan online adalah kemampuan mengatur pesanan dengan rapi. POSAJA UMKM membantu kamu memantau seluruh order dalam satu dashboard, sehingga kamu tidak perlu lagi mencatat secara manual.

2. Gunakan Layanan Pengiriman Terintegrasi
Kamu bisa langsung membuat resi dan mengatur pengiriman tanpa keluar dari aplikasi. Prosesnya cepat, mudah, dan efisien.

3. Berikan Update Pengiriman Real-Time
Informasi pengiriman real-time bikin pelanggan makin percaya dengan toko kamu.

4. Gunakan Deskripsi Produk yang Jelas
Sertakan detail penting seperti ukuran, bahan, warna, dan keunggulan produk.

5. Analisis Riwayat Transaksi
Data transaksi bantu kamu tahu produk mana yang paling laku.

6. Berikan Pelayanan Responsif
Fast response bikin peluang closing makin besar.

Berjualan online tidak harus rumit. Dengan POSAJA UMKM, kamu bisa mengelola bisnis lebih efisien, meningkatkan kepuasan pelanggan, dan mengembangkan usaha tanpa ribet.`,
  });

  const [article2, setArticle2] = useState({
    title: "Reverse Logistics Skincare Kini Bisa Lewat POSAJA!",
    image: "ads-2-full.png",
    content: `Industri kecantikan di Indonesia menghasilkan ribuan ton limbah kemasan skincare setiap tahun, terutama plastik dan kaca yang sulit terurai. Meski banyak brand memiliki komitmen keberlanjutan, belum tersedia sistem reverse logistics yang efisien dan mudah diakses konsumen. Di sisi lain, Pos Indonesia masih memiliki peluang besar di segmen reverse logistics yang belum tergarap optimal, padahal didukung jaringan outlet dan logistik yang luas.

REPA (Reverse Kemasan dengan PosAja) hadir sebagai solusi pengembalian kemasan kosong skincare dari konsumen ke produsen melalui loket kantor pos, aplikasi PosAja, atau penjemputan di toko skincare. Layanan ini memposisikan Pos Indonesia sebagai mitra circular branding bagi brand skincare tanpa memerlukan investasi baru, karena memanfaatkan outlet, SDM, armada, serta sistem IT yang sudah ada.

REPA juga menawarkan program reward bagi konsumen berupa poin PosAja atau loyalty program dari brand mitra. Skema ini mendorong partisipasi konsumen sekaligus memperkuat citra ramah lingkungan bagi brand dan Pos Indonesia.

Keunggulan utama REPA adalah peningkatan utilisasi outlet Pos, penguatan citra Pos Indonesia sebagai pelopor logistik hijau, serta dukungan nyata terhadap program ESG dan ekonomi sirkular nasional. Implementasi awal dilakukan melalui pilot project di Jabodetabek, Surabaya, dan Medan, dengan menggandeng brand skincare berkomitmen keberlanjutan.

Dalam 6 bulan, REPA ditargetkan mengumpulkan 50.000 kemasan dengan kepuasan konsumen 75% dan pendapatan Rp175 juta. Dalam 24 bulan, target meningkat menjadi 500.000 kemasan dan pendapatan Rp1,75 miliar. REPA menjadi solusi praktis yang memberi manfaat langsung bagi lingkungan, brand skincare, dan Pos Indonesia.`,
  });

  // Add new stamp
  const handleAddStamp = () => {
    if (newCity.trim() && newImageUrl.trim()) {
      const newStamp = {
        id: stamps.length + 1,
        city: newCity.trim(),
        imageUrl: newImageUrl.trim(),
      };
      setStamps([...stamps, newStamp]);
      setNewCity("");
      setNewImageUrl("");
    }
  };

  // Delete stamp - explicitly typed parameter
  const handleDeleteStamp = (id: number) => {
    setStamps(stamps.filter((stamp) => stamp.id !== id));
  };

  // Update article 1
  const handleUpdateArticle1 = (field: string, value: string) => {
    setArticle1((prev) => ({ ...prev, [field]: value }));
  };

  // Update article 2
  const handleUpdateArticle2 = (field: string, value: string) => {
    setArticle2((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAV */}
      <nav className="flex h-16 items-center bg-white border-b border-gray-200 px-4">
        <img
          className="h-12 object-contain"
          src="/posind-logo.png"
          alt="posind-logo"
        />
      </nav>

      {/* BODY */}
      <main className="flex flex-1 bg-gradient-to-b from-posBlue from-50% to-gradientCus justify-center p-2 sm:p-4">
        <div className="w-full max-w-6xl">
          {/* Page Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Panel Admin
            </h1>
            <p className="text-blue-100 text-sm sm:text-base px-2">
              Kelola data prangko dan artikel konten sesuai format halaman
              artikel
            </p>
          </div>

          {/* Stamp Management Section */}
          <div className="bg-white rounded-lg shadow-lg mb-6 sm:mb-8 overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Manajemen Data Prangko
              </h2>

              {/* Add New Stamp Form */}
              <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Nama Kota
                  </label>
                  <input
                    type="text"
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                    placeholder="Masukkan nama kota"
                    className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:ring-2 focus:ring-posBlue focus:border-posring-posBlue"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Link Gambar
                  </label>
                  <input
                    type="text"
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:ring-2 focus:ring-posBlue focus:border-posring-posBlue"
                  />
                </div>
                <div>
                  <button
                    onClick={handleAddStamp}
                    className="w-full px-3 sm:px-4 py-2 bg-white text-posOrange border border-posOrange font-medium rounded-md text-sm sm:text-base hover:bg-posOrange hover:text-white transition-colors duration-200"
                  >
                    Tambah Prangko
                  </button>
                </div>
              </div>

              {/* Stamps Table - Responsive */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-2 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        ID
                      </th>
                      <th className="px-2 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Nama Kota
                      </th>
                      <th className="px-2 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Pratinjau
                      </th>
                      <th className="px-2 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Link Gambar
                      </th>
                      <th className="px-2 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {stamps.map((stamp) => (
                      <tr key={stamp.id} className="hover:bg-gray-50">
                        <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap font-medium text-gray-900">
                          {stamp.id}
                        </td>
                        <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-gray-900">
                          {stamp.city}
                        </td>
                        <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                          <img
                            src={stamp.imageUrl}
                            alt={stamp.city}
                            className="w-12 sm:w-16 h-9 sm:h-12 object-contain border border-gray-200 rounded"
                          />
                        </td>
                        <td className="px-2 sm:px-6 py-2 sm:py-4 text-gray-500 max-w-[100px] sm:max-w-xs truncate">
                          {stamp.imageUrl}
                        </td>
                        <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                          <button
                            onClick={() => handleDeleteStamp(stamp.id)}
                            className="text-red-600 hover:text-red-900 font-medium text-xs sm:text-sm"
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {stamps.length === 0 && (
                  <div className="text-center py-6 text-gray-500 text-sm">
                    Belum ada data prangko
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Edit Article Section - Matching the exact article page structure */}
          <div className="space-y-6 sm:space-y-8">
            {/* Article 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Edit Artikel 1
                </h2>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Judul Artikel
                    </label>
                    <input
                      type="text"
                      value={article1.title}
                      onChange={(e) =>
                        handleUpdateArticle1("title", e.target.value)
                      }
                      className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Masukkan judul artikel"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      URL Gambar
                    </label>
                    <input
                      type="text"
                      value={article1.image}
                      onChange={(e) =>
                        handleUpdateArticle1("image", e.target.value)
                      }
                      placeholder="ads-1-full.png atau URL gambar"
                      className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Konten Artikel
                    </label>
                    <textarea
                      value={article1.content}
                      onChange={(e) =>
                        handleUpdateArticle1("content", e.target.value)
                      }
                      placeholder="Masukkan konten artikel lengkap..."
                      className="w-full h-40 sm:h-64 p-2 sm:p-4 border border-gray-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                    />
                  </div>

                  {/* Article Preview - Exact match to the article page structure */}
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                      Pratinjau Halaman Artikel:
                    </h3>
                    <div className="bg-gray-50 rounded-lg sm:rounded-xl shadow-lg overflow-hidden max-w-3xl mx-auto">
                      {/* TITLE */}
                      <div className="bg-orange-500 px-3 sm:px-4 py-2 sm:py-3">
                        <h1 className="text-white text-center font-black break-words text-sm sm:text-lg md:text-xl leading-snug">
                          {article1.title}
                        </h1>
                      </div>

                      {/* IMAGE */}
                      <div className="w-full">
                        <img
                          src={article1.image}
                          alt="Pratinjau artikel"
                          className="w-full h-32 sm:h-48 md:h-64 object-cover"
                          style={{ objectPosition: "50% 20%" }}
                        />
                      </div>

                      {/* TEXT */}
                      <div className="text-gray-800 break-words space-y-2 sm:space-y-3 px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm md:text-base leading-relaxed">
                        {article1.content
                          .split("\n\n")
                          .map((paragraph, index) => (
                            <p key={index} className="whitespace-pre-line">
                              {paragraph}
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Edit Artikel 2
                </h2>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Judul Artikel
                    </label>
                    <input
                      type="text"
                      value={article2.title}
                      onChange={(e) =>
                        handleUpdateArticle2("title", e.target.value)
                      }
                      className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Masukkan judul artikel"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      URL Gambar
                    </label>
                    <input
                      type="text"
                      value={article2.image}
                      onChange={(e) =>
                        handleUpdateArticle2("image", e.target.value)
                      }
                      placeholder="ads-2-full.png atau URL gambar"
                      className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Konten Artikel
                    </label>
                    <textarea
                      value={article2.content}
                      onChange={(e) =>
                        handleUpdateArticle2("content", e.target.value)
                      }
                      placeholder="Masukkan konten artikel lengkap..."
                      className="w-full h-40 sm:h-64 p-2 sm:p-4 border border-gray-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                    />
                  </div>

                  {/* Article Preview - Exact match to the article page structure */}
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                      Pratinjau Halaman Artikel:
                    </h3>
                    <div className="bg-gray-50 rounded-lg sm:rounded-xl shadow-lg overflow-hidden max-w-3xl mx-auto">
                      {/* TITLE */}
                      <div className="bg-orange-500 px-3 sm:px-4 py-2 sm:py-3">
                        <h1 className="text-white text-center font-black break-words text-sm sm:text-lg md:text-xl leading-snug">
                          {article2.title}
                        </h1>
                      </div>

                      {/* IMAGE */}
                      <div className="w-full">
                        <img
                          src={article2.image}
                          alt="Pratinjau artikel"
                          className="w-full h-32 sm:h-48 md:h-64 object-cover"
                          style={{ objectPosition: "50% 20%" }}
                        />
                      </div>

                      {/* TEXT */}
                      <div className="text-gray-800 break-words space-y-2 sm:space-y-3 px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm md:text-base leading-relaxed">
                        {article2.content
                          .split("\n\n")
                          .map((paragraph, index) => (
                            <p key={index} className="whitespace-pre-line">
                              {paragraph}
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="text-center pb-4">
              <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-posOrange font-medium rounded-lg text-sm sm:text-base hover:bg-posOrange hover:text-white transition-colors duration-200 shadow-lg">
                Simpan Semua Perubahan
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="h-8 bg-white"></footer>
    </div>
  );
}
