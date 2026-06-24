import Link from "next/link";

export interface ArticleCardProps {
  title: string;
  slug: string;
  cover_image_url: string;
  url: string;
  content: string;
}

function extractPreview(html: string, maxLength: number = 120): string {
  if (typeof window === "undefined") {
    const text = html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).replace(/\s+\S*$/, "") + "...";
  }

  const doc = new DOMParser().parseFromString(html, "text/html");
  const text = doc.body.textContent?.replace(/\s+/g, " ").trim() ?? "";
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s+\S*$/, "") + "...";
}

export default function ArticleCard({
  title,
  slug,
  cover_image_url,
  url,
  content,
}: ArticleCardProps) {
  const preview = extractPreview(content);

  return (
    <Link href={url} className="block w-full h-full">
      <div className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex h-full">
        <img
          src={cover_image_url}
          alt={title}
          className="w-[140px] h-[100px] object-cover shrink-0"
        />
        <div className="p-3 flex flex-col flex-1 min-w-0">
          <h3 className="font-bold text-sm text-posBlue line-clamp-2 mb-1">
            {title}
          </h3>
          <p className="text-gray-600 text-xs line-clamp-2 mb-2">
            {preview}
          </p>
          <div className="mt-auto">
            <span className="text-posOrange text-xs font-semibold">
              Baca lebih lanjut
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
