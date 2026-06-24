import { headers } from "next/headers";
import Receipt from "@/app/components/Receipt";
import type { ArticleData } from "@/app/resi/[resi]/types";

interface Props {
  params: {
    resi: string;
  };
}

export default async function Page({ params }: Props) {
  const { resi } = await params;

  const headersList = await headers();
  const host = headersList.get("host") ?? "localhost:7773";
  const proto = headersList.get("x-forwarded-proto") ?? "http";
  const baseUrl = `${proto}://${host}`;

  const res = await fetch(`${baseUrl}/api/resi/${resi}`, {
    cache: "no-store",
  });

  const data = await res.json();

  let articles: ArticleData[] = [];
  const nokprk = data?.data?.nokprk;
  if (data.success && nokprk) {
    try {
      const articleRes = await fetch(
        `${baseUrl}/api/articles?nokprk=${encodeURIComponent(nokprk)}`,
        { cache: "no-store" }
      );
      const articleData = await articleRes.json();
      if (articleData.success) {
        articles = articleData.articles;
      }
    } catch {
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F7FB]">
      <main className="flex flex-1 justify-center px-4 md:px-6 pt-14 pb-8">
        <div className="w-full max-w-[1024px]">
          {data.success ? (
            <Receipt data={data} articles={articles} />
          ) : (
            <div className="flex flex-col items-center justify-center w-full min-h-[300px] bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-posBlue">Resi tidak ditemukan</h2>
              <p className="text-sm mt-2 text-gray-600">
                Nomor resi yang dimasukkan tidak cocok, silahkan cek kembali.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
