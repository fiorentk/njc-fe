import Receipt from "@/app/components/Receipt";
import { getDummyResi, type ResiData } from "./dummy-data";

interface Props {
  params: {
    resi: string;
  };
}

export default async function Page({ params }: Props) {
  const { resi } = await params;
  const resi_param = resi;

  let data: ResiData;

  if (process.env.NODE_ENV === "development") {
    data = getDummyResi(resi_param);
  } else {
    const res = await fetch(
      `https://api-nusantarajourneycard.vercel.app/resi/${resi_param}`,
      {
        headers: {
          "x-api-key": process.env["API_KEY"] as string,
        },
        cache: "no-store",
      }
    );
    data = await res.json();
  }
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F7FB]">
      <main className="flex flex-1 justify-center px-4 md:px-6 pt-14 pb-8">
        <div className="w-full max-w-[1024px]">
          {data.success ? (
            <Receipt data={data} />
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
