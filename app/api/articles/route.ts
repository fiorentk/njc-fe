import { NextRequest, NextResponse } from "next/server";

const DEFAULT_ARTICLES = [
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

interface AssetLookupArticle {
  id: number;
  title: string;
  slug: string;
  cover_image_url: string;
  url: string;
}

interface ArticleContent {
  id: number;
  title: string;
  slug: string;
  content: string;
  cover_image_url: string;
  author: { username: string };
  created_at: string;
  updated_at: string;
}

interface ArticlePreview {
  title: string;
  slug: string;
  cover_image_url: string;
  url: string;
  content: string;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const nokprk = request.nextUrl.searchParams.get("nokprk");
    const assetUrl = process.env["ASSET_URL"];
    const articleBaseUrl = process.env["ARTICLE_URL"];

    if (!nokprk || !assetUrl) {
      return NextResponse.json({ success: true, articles: DEFAULT_ARTICLES });
    }

    const lookupRes = await fetch(`${assetUrl}/api/public/asset-lookup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "article", code: nokprk }),
    });

    if (!lookupRes.ok) {
      throw new Error(`Asset lookup failed with status ${lookupRes.status}`);
    }

    const lookupData = await lookupRes.json();
    const matched: AssetLookupArticle[] = lookupData.articles;

    if (!matched || matched.length === 0) {
      return NextResponse.json({ success: true, articles: DEFAULT_ARTICLES });
    }

    const articles: ArticlePreview[] = await Promise.all(
      matched.map(async (article): Promise<ArticlePreview> => {
        try {
          const contentRes = await fetch(
            `${assetUrl}/api/public/articles/${article.slug}`,
          );

          if (!contentRes.ok) {
            throw new Error(
              `Article fetch failed for "${article.slug}": ${contentRes.status}`,
            );
          }

          const contentData: ArticleContent = await contentRes.json();

          return {
            title: article.title,
            slug: article.slug,
            cover_image_url: article.cover_image_url,
            url: articleBaseUrl
              ? `${articleBaseUrl}${article.url}`
              : article.url,
            content: contentData.content,
          };
        } catch {
          return {
            title: article.title,
            slug: article.slug,
            cover_image_url: article.cover_image_url,
            url: articleBaseUrl
              ? `${articleBaseUrl}${article.url}`
              : article.url,
            content: "",
          };
        }
      }),
    );

    return NextResponse.json({ success: true, articles });
  } catch {
    return NextResponse.json({ success: false, articles: DEFAULT_ARTICLES });
  }
}
