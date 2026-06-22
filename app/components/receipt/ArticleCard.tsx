import Link from "next/link";

export interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function ArticleCard({
  title,
  description,
  imageUrl,
  link,
}: ArticleCardProps) {
  return (
    <Link href={link} className="block w-full h-full">
      <div className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex h-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-[140px] h-[100px] object-cover shrink-0"
        />
        <div className="p-3 flex flex-col flex-1 min-w-0">
          <h3 className="font-bold text-sm text-posBlue line-clamp-2 mb-1">
            {title}
          </h3>
          <p className="text-gray-600 text-xs line-clamp-2 mb-2">
            {description}
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
