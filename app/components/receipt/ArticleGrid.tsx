import ArticleCard from './ArticleCard';

export interface ArticleGridProps {
  articles: Array<{
    title: string;
    slug: string;
    cover_image_url: string;
    url: string;
    content: string;
  }>;
}

export default function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <div className="w-full mt-8">
      <h2 className="font-bold text-2xl text-posBlue mb-6">
        Anda mungkin tertarik
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug || article.title}
            title={article.title}
            slug={article.slug}
            cover_image_url={article.cover_image_url}
            url={article.url}
            content={article.content}
          />
        ))}
      </div>
    </div>
  );
}
