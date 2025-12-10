import Link from "next/link";

import CopyButton from "./CopyButton";
import ShareButton from "./ShareButton";
import DownloadButton from "./DownloadButton";

interface ReceiptProps {
  data: {
    success: boolean;
    data: {
      connote: string;
      connote_created_date: string;
      sla: number;
      service: string;
      sender: string;
      origin_address: string;
      recipient: string;
      destination_address: string;
      details: string;
      connote_stamp: string;
      is_umkm: boolean;
      umkm_name: string;
      umkm_logo: string;
      current_state: string;
      current_office: string;
      origin_office: string;
      destination_office: string;
      connote_progress: {
        timestamp: string;
        progress_state: string;
      }[];
    };
  };
}

function Receipt({ data }: ReceiptProps) {
  const dataKiriman = [
    { name: "Nomor Resi", value: data.data.connote },
    { name: "Tanggal Pengiriman", value: data.data.connote_created_date },
    { name: "Layanan", value: data.data.service },
    { name: "Pengirim", value: data.data.sender },
    { name: "Alamat Pengirim", value: data.data.origin_address },
    { name: "Penerima", value: data.data.recipient },
    { name: "Alamat Penerima", value: data.data.destination_address },
  ];

  const progressKiriman = data.data.connote_progress;

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    const tanggal = d.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    const jam = d.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return `${tanggal} ${jam}`;
  };

  const created = new Date(data.data.connote_created_date);
  const eta = new Date(created);
  eta.setDate(created.getDate() + data.data.sla);

  const toDateOnly = (date: Date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const eta_str = toDateOnly(eta);

  const is_umkm = data.data.is_umkm;
  const umkm_name = data.data.umkm_name;
  const umkm_logo = data.data.umkm_logo;

  let state;

  if (data.data.current_state === "Pick Up") {
    state =
      "https://res.cloudinary.com/dmnyj3znw/image/upload/v1764568134/pickup_pos_stnyzl.png";
  } else if (data.data.current_state === "Shipping") {
    state =
      "https://res.cloudinary.com/dmnyj3znw/image/upload/v1764568135/truck_pos_e89j45.png";
  } else {
    state =
      "https://res.cloudinary.com/dmnyj3znw/image/upload/v1764568136/delivery_pos_zvavmm.png";
  }

  return (
    <div className="flex flex-col flex-1 m-4 md:m-12 w-full max-w-[900px] min-w-max bg-gray-50 rounded-md">
      <div id="receipt" className="">
        {/* TITLE MAIN CARD */}
        <div className="flex bg-posOrange rounded-t-md items-center p-4 relative">
          {/* LOGO */}
          <div className="bg-white rounded-md p-2 shrink-0">
            <img
              className="h-16 object-contain"
              src={umkm_logo}
              alt="umkm-logo"
            />
          </div>

          {/* TITLE */}
          <div className="flex-1 flex flex-col items-center justify-center text-white text-center px-2">
            <span className="text-sm md:text-base font-semibold">
              Terima Kasih Telah Bertransaksi di
            </span>

            <span className="text-xl md:text-3xl font-black whitespace-normal break-words">
              {is_umkm ? umkm_name : "PT POS INDONESIA"}
            </span>
          </div>
        </div>

        {/* MAP & DETAIL KIRIMAN */}
        <div className="m-4 flex flex-col md:flex-row gap-4 items-center">
          {/* MAP */}
          <div className="w-[450px] h-96 shrink-0 bg-posDarkBlue rounded-md flex flex-col shadow-lg">
            <div className="text-posOrange font-semibold flex m-2 justify-between">
              <span>State Kiriman</span>
              <div className="flex items-center gap-2">
                <CopyButton variant="icon" />
                <ShareButton variant="icon" resi={data.data.connote} />
              </div>
            </div>
            <div className="bg-posBlue rounded-md m-2 mt-0 relative overflow-hidden flex flex-1">
              {/* BACKGROUND CITY */}
              <img
                src="/city.png"
                className="absolute left-1/2 -translate-x-1/2 w-full h-full object-cover"
              />

              {/* STAMP */}
              <img
                src={data.data.connote_stamp}
                className="absolute top-4 right-4 w-28"
              />

              {/* LOCATION BUBBLE */}
              {/* CURRENT */}
              <div className="absolute bottom-40 left-1/2 -translate-x-1/2 bg-white text-posBlue px-4 py-2 rounded-full flex flex-col text-center">
                <span className="text-xs">Lokasi saat ini</span>
                <span className="text-sm font-bold">
                  {data.data.current_office}
                </span>
              </div>
              {/* ORIGIN */}
              <div className="absolute bottom-14 left-4 flex flex-col items-center">
                <div className="max-w-28 bg-white text-posBlue px-2 py-1 rounded-3xl text-center mb-1 text-xs font-bold">
                  {data.data.origin_office}
                </div>
                <div className="relative w-4 h-4">
                  <div className=" absolute inset-0 bg-posOrange rounded-full border-2 border-white "></div>
                  <div className=" absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-8 border-t-posOrange "></div>{" "}
                </div>
              </div>

              {/* DESTINATION */}
              <div className="absolute bottom-14 right-4 flex flex-col items-center">
                <div className=" max-w-28 bg-white text-posBlue px-2 py-1 rounded-3xl text-center mb-1 text-xs font-bold">
                  {data.data.destination_office}
                </div>
                <div className="relative w-4 h-4">
                  <div className=" absolute inset-0 bg-posOrange rounded-full border-2 border-white "></div>
                  <div className=" absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-8 border-t-posOrange "></div>
                </div>
              </div>
              {/* EARTH */}
              <img
                src="/earth.png"
                className="absolute top-60 animate-spinSlow"
              />
              {/* TRUCK */}
              <div>
                <img
                  src={state}
                  className="absolute left-[29%] bottom-16 -translate-x-1/2 w-40 animate-slideFadeLoop"
                />
              </div>
            </div>
          </div>

          {/* DETAIL KIRIMAN */}
          <div className="w-[450px] h-96 shrink-0 flex flex-col shadow-lg bg-gray-100 rounded-md">
            {/* TITLE */}
            <div className="bg-posOrange rounded-t-md p-4 text-white text-center">
              <div className="text-base font-medium leading-tight">
                Detail Kiriman
              </div>
              <div className="text-xl font-extrabold leading-tight">
                {data.data.details}
              </div>
            </div>

            {/* DETAIL */}
            <div className="p-2 overflow-y-auto flex-1 text-posBlue">
              <div>
                {dataKiriman.map((item, i) => (
                  <ul
                    key={i}
                    className="flex justify-between w-full py-1 font-semibold"
                  >
                    <span className="w-1/2 whitespace-nowrap text-left">
                      {item.name}
                    </span>
                    <span className="w-1/2 text-right">{item.value}</span>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PROGRESS & BUTTONS */}
      <div className="m-4 flex flex-col md:flex-row gap-4 items-center justify-center">
        {/* PROGRESS */}
        <div className="w-[450px] self-stretch shrink-0 flex flex-col shadow-lg bg-gray-100 rounded-md text-posBlue">
          <div className="m-2 flex items-baseline">
            <div className="flex flex-col">
              <span className="text-base font-bold">Progress Kiriman</span>
              <span className="text-base font-bold">
                Resi: {data.data.connote}
              </span>
            </div>
            <div className="text-sm ml-auto text-right flex flex-col">
              <span>Estimasi Tiba:</span>
              <span>{eta_str}</span>
            </div>
          </div>
          {/* DETAIL*/}
          <div className="m-2 overflow-y-auto flex-1">
            {progressKiriman.map((item, i) => {
              const isCurrent = i === 0;

              return (
                <li key={i} className="flex items-start gap-2">
                  <div
                    className={`w-3 h-3 rounded-full mt-2 ${
                      isCurrent ? "bg-posOrange" : "bg-posOrange/60"
                    }`}
                  />

                  <div className="flex flex-col flex-1">
                    <span
                      className={`break-all ${
                        isCurrent
                          ? "text-base font-bold"
                          : "text-sm font-semibold"
                      }`}
                    >
                      {item.progress_state}
                    </span>

                    <span
                      className={`${
                        isCurrent ? "text-base font-semibold mb-2" : "text-sm"
                      }`}
                    >
                      {formatDate(item.timestamp)}
                    </span>
                  </div>
                </li>
              );
            })}
          </div>
        </div>

        {/* BUTTONS AND DOWNLOAD */}
        <div className="w-[450px] self-stretch shrink-0 flex flex-col gap-4 md:gap-2">
          {/* BUTTONS AND NOTE*/}
          <div className="w-full shadow-lg bg-gray-100 rounded-md">
            {/* BUTTONS */}
            <div className="m-2 flex justify-between">
              <CopyButton variant="full" />
              <DownloadButton resi={data.data.connote} />
              <ShareButton variant="full" resi={data.data.connote} />
            </div>
            {/* NOTE */}
            <div className="text-xs text-gray-600 m-2 p-2 bg-gray-300 rounded-md">
              Kiriman mungkin dapat terlambat karena cuaca ataupun faktor
              eksternal lainnya. Periksa progress kiriman untuk mengetahui
              posisi aktual kiriman. Hubungi Call center jika terdapat kendala
              pada kiriman anda.
            </div>
          </div>
          {/* DOWNLOAD APPS */}
          <div className="w-full shadow-lg bg-gray-100 rounded-md p-2 felx flex-col items-center text-center">
            <span className="text-posBlue font-bold">
              Download Aplikasi Pospay & Pos Aja!
            </span>
            <div className="flex gap-4 justify-center mt-2">
              <a
                className="w-[130px] object-contain text-posBlue font-bold"
                href="https://linktr.ee/lasingan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="" src="/QR-POS.png" alt="QR-POS" />
                Click or Scan
              </a>

              <div className="flex flex-col items-center justify-center">
                <img
                  className="w-[100px] object-contain"
                  src="/posaja-logo.png"
                  alt="posaja-logo"
                />
                <img
                  className="h-10 object-contain"
                  src="/pospay-logo.png"
                  alt="pospay-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Anda Mungkin Tertarik */}
      <div className="m-4 flex">
        <div className="w-full border-t border-dashed border-posBlue my-4"></div>
        <div className="text-posBlue p-1 min-w-max">Anda Mungkin Tertarik</div>
        <div className="w-full border-t border-dashed border-posBlue my-4"></div>
      </div>
      {/* Ads Content */}
      <div className="m-4 flex flex-col md:flex-row gap-4 items-center">
        {/* Ads 1 */}
        <Link
          href="/article"
          className="flex w-[450px] h-28 p-2 shrink-0 bg-gray-100 rounded-md text-posBlue shadow-lg"
        >
          <img
            src="/ads-1.png"
            alt="ads-1"
            className="h-20 object-contain mr-3 self-center rounded"
          />

          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold">
              Tips Berjualan Online Mudah dengan POSAJA UMKM
            </span>

            <span className="text-xs leading-snug">
              Belanja online adalah tren baru yang terjadi di masyarakat pada
              saat ini. Berikut adalah tips agar penjualan dan kiriman mu bisa
              lebih efisien... Baca Lebih Lanjut
            </span>
          </div>
        </Link>

        {/* Ads 2 */}
        <Link
          href="/article"
          className="flex w-[450px] h-28 p-2 shrink-0 bg-gray-100 rounded-md text-posBlue shadow-lg"
        >
          <img
            src="/ads-2.png"
            alt="ads-2"
            className="h-20 object-contain mr-3 self-center rounded"
          />

          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold">
              Jangan Ketinggalan Ini Cara Berjualan Online 2025
            </span>

            <span className="text-xs leading-snug">
              Belanja online adalah tren baru yang terjadi di masyarakat pada
              saat ini. Berikut adalah tips agar penjualan dan kiriman mu bisa
              lebih efisien... Baca Lebih Lanjut
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Receipt;
