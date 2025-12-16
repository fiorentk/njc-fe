"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";

export default function AdminPage() {
  // State for stamp management
  const [stamps, setStamps] = useState<
    Array<{ id: number; city: string; imageUrl: string }>
  >([
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

  const [newCity, setNewCity] = useState<string>("");
  const [newImageUrl, setNewImageUrl] = useState<string>("");

  // State for articles - now using array structure like stamps
  const [articles, setArticles] = useState<
    Array<{ id: number; title: string; image: string; content: string }>
  >([
    {
      id: 1,
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
    },
    {
      id: 2,
      title: "Reverse Logistics Skincare Kini Bisa Lewat POSAJA!",
      image: "ads-2-full.png",
      content: `Industri kecantikan di Indonesia menghasilkan ribuan ton limbah kemasan skincare setiap tahun, terutama plastik dan kaca yang sulit terurai. Meski banyak brand memiliki komitmen keberlanjutan, belum tersedia sistem reverse logistics yang efisien dan mudah diakses konsumen. Di sisi lain, Pos Indonesia masih memiliki peluang besar di segmen reverse logistics yang belum tergarap optimal, padahal didukung jaringan outlet dan logistik yang luas.

REPA (Reverse Kemasan dengan PosAja) hadir sebagai solusi pengembalian kemasan kosong skincare dari konsumen ke produsen melalui loket kantor pos, aplikasi PosAja, atau penjemputan di toko skincare. Layanan ini memposisikan Pos Indonesia sebagai mitra circular branding bagi brand skincare tanpa memerlukan investasi baru, karena memanfaatkan outlet, SDM, armada, serta sistem IT yang sudah ada.

REPA juga menawarkan program reward bagi konsumen berupa poin PosAja atau loyalty program dari brand mitra. Skema ini mendorong partisipasi konsumen sekaligus memperkuat citra ramah lingkungan bagi brand dan Pos Indonesia.

Keunggulan utama REPA adalah peningkatan utilisasi outlet Pos, penguatan citra Pos Indonesia sebagai pelopor logistik hijau, serta dukungan nyata terhadap program ESG dan ekonomi sirkular nasional. Implementasi awal dilakukan melalui pilot project di Jabodetabek, Surabaya, dan Medan, dengan menggandeng brand skincare berkomitmen keberlanjutan.

Dalam 6 bulan, REPA ditargetkan mengumpulkan 50.000 kemasan dengan kepuasan konsumen 75% dan pendapatan Rp175 juta. Dalam 24 bulan, target meningkat menjadi 500.000 kemasan dan pendapatan Rp1,75 miliar. REPA menjadi solusi praktis yang memberi manfaat langsung bagi lingkungan, brand skincare, dan Pos Indonesia.`,
    },
  ]);

  const [newArticleTitle, setNewArticleTitle] = useState<string>("");
  const [newArticleImage, setNewArticleImage] = useState<string>("");
  const [newArticleContent, setNewArticleContent] = useState<string>("");

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

  // Delete stamp
  const handleDeleteStamp = (id: number) => {
    setStamps(stamps.filter((stamp) => stamp.id !== id));
  };

  // Add new article
  const handleAddArticle = () => {
    if (
      newArticleTitle.trim() &&
      newArticleImage.trim() &&
      newArticleContent.trim()
    ) {
      const newArticle = {
        id: articles.length + 1,
        title: newArticleTitle.trim(),
        image: newArticleImage.trim(),
        content: newArticleContent.trim(),
      };
      setArticles([...articles, newArticle]);
      setNewArticleTitle("");
      setNewArticleImage("");
      setNewArticleContent("");
    }
  };

  // Delete article
  const handleDeleteArticle = (id: number) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  // Update article
  const handleUpdateArticle = (
    id: number,
    field: keyof (typeof articles)[0],
    value: string
  ) => {
    setArticles(
      articles.map((article) =>
        article.id === id ? { ...article, [field]: value } : article
      )
    );
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
                    className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                            className="text-red-600 hover:text-red-900 font-medium text-xs sm:text-sm flex items-center gap-1"
                          >
                            <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
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

          {/* Articles Management Section - Now matching stamps structure */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Manajemen Artikel
              </h2>

              {/* Add New Article Form */}
              <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Judul Artikel
                  </label>
                  <input
                    type="text"
                    value={newArticleTitle}
                    onChange={(e) => setNewArticleTitle(e.target.value)}
                    placeholder="Masukkan judul artikel"
                    className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    URL Gambar
                  </label>
                  <input
                    type="text"
                    value={newArticleImage}
                    onChange={(e) => setNewArticleImage(e.target.value)}
                    placeholder="ads-1-full.png atau URL gambar"
                    className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Konten Artikel
                  </label>
                  <textarea
                    value={newArticleContent}
                    onChange={(e) => setNewArticleContent(e.target.value)}
                    placeholder="Masukkan konten artikel lengkap..."
                    className="w-full h-24 sm:h-32 p-2 sm:p-3 border border-gray-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  />
                </div>
                <div>
                  <button
                    onClick={handleAddArticle}
                    className="w-full px-3 sm:px-4 py-2 bg-white text-posOrange border border-posOrange font-medium rounded-md text-sm sm:text-base hover:bg-posOrange hover:text-white transition-colors duration-200"
                  >
                    Tambah Artikel
                  </button>
                </div>
              </div>

              {/* Articles Table - Responsive */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-2 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        ID
                      </th>
                      <th className="px-2 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Judul
                      </th>
                      <th className="px-2 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Gambar
                      </th>
                      <th className="px-2 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {articles.map((article) => (
                      <tr key={article.id} className="hover:bg-gray-50">
                        <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap font-medium text-gray-900">
                          {article.id}
                        </td>
                        <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-gray-900 max-w-[150px] sm:max-w-xs truncate">
                          {article.title}
                        </td>
                        <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-12 sm:w-16 h-9 sm:h-12 object-cover border border-gray-200 rounded"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src =
                                "https://placehold.co/64x48/E5E7EB/6B7280?text=Image";
                            }}
                          />
                        </td>
                        <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                            <button
                              onClick={() => handleDeleteArticle(article.id)}
                              className="text-red-600 hover:text-red-900 font-medium text-xs sm:text-sm flex items-center gap-1"
                            >
                              <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                              Hapus
                            </button>
                            <button
                              onClick={() => {
                                // Open edit modal or inline edit
                                const field = prompt(
                                  "Edit field (title/image/content):",
                                  "title"
                                );
                                if (
                                  field &&
                                  (field === "title" ||
                                    field === "image" ||
                                    field === "content")
                                ) {
                                  const value = prompt(
                                    `New ${field}:`,
                                    article[field]
                                  );
                                  if (value !== null) {
                                    handleUpdateArticle(
                                      article.id,
                                      field,
                                      value
                                    );
                                  }
                                }
                              }}
                              className="text-blue-600 hover:text-blue-900 font-medium text-xs sm:text-sm"
                            >
                              Edit
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {articles.length === 0 && (
                  <div className="text-center py-6 text-gray-500 text-sm">
                    Belum ada artikel
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="text-center mt-6 sm:mt-8 pb-4">
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-posOrange font-medium rounded-lg text-sm sm:text-base hover:bg-posOrange hover:text-white transition-colors duration-200 shadow-lg">
              Simpan Semua Perubahan
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="h-8 bg-white"></footer>
    </div>
  );
}
