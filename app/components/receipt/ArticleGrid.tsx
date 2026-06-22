import ArticleCard from './ArticleCard';

export interface ArticleGridProps {
  articles: Array<{
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  }>;
}

export default function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <div className="w-full mt-8">
      <h2 className="font-bold text-2xl text-posBlue mb-6">
        Anda mungkin tertarik
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
            link={article.link}
          />
        ))}
      </div>
    </div>
  );
}
