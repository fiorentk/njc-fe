import Receipt from "./Receipt";

interface Props {
  params: {
    resi: string;
  };
}

export default async function Page({ params }: Props) {
  const { resi } = await params;
  const resi_param = resi;

  const res = await fetch(
    `https://api-nusantarajourneycard.vercel.app/resi/${resi_param}`,
    {
      headers: {
        "x-api-key": process.env.API_KEY as string,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();

  return (
    <div className="min-h-screen flex flex-col scroll-auto">
      {/* NAV */}
      <nav className="flex h-16 items-center">
        <img
          className="h-16 object-contain p-1"
          src="posind-logo.png"
          alt="posind-logo"
        />
      </nav>
      {/* BODY */}
      <main className="flex flex-1 bg-gradient-to-b min-w-max from-posBlue from-50% to-gradientCus justify-center">
        {data.success ? (
          <Receipt data={data} />
        ) : (
          <div className="flex flex-col items-center justify-center w-full max-w-[900px] min-h-[300px] m-4 md:m-12 bg-white rounded-md border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">Resi tidak ditemukan</h2>
            <p className="text-sm mt-2 text-gray-600">
              Nomor resi yang dimasukkan tidak cocok, silahkan cek kembali.
            </p>
          </div>
        )}
      </main>
      {/* FOOTER */}
      <footer className="h-20"></footer>
    </div>
  );
}
