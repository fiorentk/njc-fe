import type { ResiData } from "@/app/resi/[resi]/dummy-data";
import TopBanner from "./receipt/TopBanner";
import StatusOverview from "./receipt/StatusOverview";
import DetailKirmanDetails from "./receipt/DetailKirmanDetails";
import DetailKirmanActions from "./receipt/DetailKirmanActions";
import RiwayatPengiriman from "./receipt/RiwayatPengiriman";
import DownloadAppCTA from "./receipt/DownloadAppCTA";
import ArticleCard from "./receipt/ArticleCard";

export interface ReceiptProps {
  data: ResiData;
}

const SAMPLE_ARTICLES = [
  {
    title: "Reverse Logistics Skincare Kini Bisa Lewat POSAJA!",
    description:
      "Reverse logistics skincare jadi solusi penting di era belanja online. Dengan POSAJA, proses retur jadi lebih praktis, cepat, dan efisien untuk penjual maupun pembeli...",
    imageUrl: "/ads-1.png",
    link: "/article",
  },
  {
    title: "Tips Mengirim Paket Aman Saat Musim Hujan",
    description:
      "Musim hujan bukan halangan untuk tetap mengirim paket. Simak tips praktis agar kiriman Anda tetap aman dan sampai tujuan dengan selamat...",
    imageUrl: "/ads-2.png",
    link: "/article-2",
  },
];

function Receipt({ data }: ReceiptProps) {
  const d = data.data;
  const sellerName = d.is_umkm ? d.umkm_name : "PT POS INDONESIA";

  return (
    <div className="flex flex-col gap-5">
      <div id="receipt-export" className="flex flex-col gap-5">
        <TopBanner sellerName={sellerName} />
        <StatusOverview data={d} />

        <div className="grid grid-cols-1 lg:grid-cols-[38%_1fr] gap-5">
          <DetailKirmanDetails data={d} />
          <RiwayatPengiriman data={d} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[38%_1fr] gap-5">
        <DetailKirmanActions data={d} />
        <DownloadAppCTA />
      </div>

      <div className="bg-white rounded-[20px] border border-gray-100 p-6">
        <h2 className="font-bold text-lg text-posBlue mb-4">
          Anda mungkin tertarik
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SAMPLE_ARTICLES.map((article) => (
            <ArticleCard key={article.link} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Receipt;
