import type { ResiData, ArticleData } from "@/app/resi/[resi]/types";
import TopBanner from "./receipt/TopBanner";
import StatusOverview from "./receipt/StatusOverview";
import DetailKirmanDetails from "./receipt/DetailKirmanDetails";
import DetailKirmanActions from "./receipt/DetailKirmanActions";
import RiwayatPengiriman from "./receipt/RiwayatPengiriman";
import DownloadAppCTA from "./receipt/DownloadAppCTA";
import ArticleCard from "./receipt/ArticleCard";

export interface ReceiptProps {
  data: ResiData;
  articles?: ArticleData[];
}

const DEFAULT_ARTICLES: ArticleData[] = [
  {
    title: "News From POS",
    slug: "news-pos",
    cover_image_url:
      "https://www.posindonesia.co.id/_next/image?url=https%3A%2F%2Fadmin-piol.posindonesia.co.id%2Fmedia%2FHalopos.jpeg&w=1920&q=80",
    url: "https://www.posindonesia.co.id/en/articles/1",
    content:
      "Read the latest news and articles from POS INDONESIA to get information about programs, promotions, and other POS INDONESIA services.",
  },
  {
    title: "Gallery POS",
    slug: "gallery-pos",
    cover_image_url:
      "https://www.posindonesia.co.id/_next/image?url=https%3A%2F%2Fadmin-piol.posindonesia.co.id%2Fmedia%2Fcf79d89df20596dec685f3310b1e2806.jpg&w=1920&q=75",
    url: "https://www.posindonesia.co.id/en/galery?page=1",
    content:
      "View the latest media publications from POS INDONESIA to get information about programs, promotions, and other POS INDONESIA services.",
  },
];

function Receipt({ data, articles }: ReceiptProps) {
  const d = data.data;
  const fallbackLogoUrl =
    "https://res.cloudinary.com/dmnyj3znw/image/upload/v1765029163/logopos_wdmmpu.png";
  const sellerName = "POS INDONESIA";
  const logoUrl = fallbackLogoUrl;

  const displayArticles =
    articles && articles.length > 0 ? articles : DEFAULT_ARTICLES;

  return (
    <div className="flex flex-col gap-5">
      <div id="receipt-export" className="flex flex-col gap-5">
        <TopBanner sellerName={sellerName} logoUrl={logoUrl} />
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
          {displayArticles.map((article) => (
            <ArticleCard key={article.slug || article.title} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Receipt;
