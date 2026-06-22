import { ResiData } from "@/app/resi/[resi]/dummy-data";

export interface DetailKirmanDetailsProps {
  data: ResiData["data"];
}

function DetailKirmanDetails({ data }: DetailKirmanDetailsProps) {
  const formattedDate = new Date(data.connote_created_date).toLocaleDateString(
    "id-ID",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div className="bg-white rounded-[20px] border border-gray-100 p-6">
      <h2 className="font-bold text-lg text-posBlue mb-1">Detail Kiriman</h2>
      <p className="text-gray-600 text-sm mb-4">{data.details}</p>

      <div className="border-t border-gray-100 pt-4">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-gray-500 text-sm font-medium">Tanggal Pengiriman</span>
            <span className="text-posBlue text-sm font-semibold">{formattedDate}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500 text-sm font-medium">Layanan</span>
            <span className="text-posBlue text-sm font-semibold">{data.service}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500 text-sm font-medium">Pengirim</span>
            <span className="text-posBlue text-sm font-semibold">{data.sender}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500 text-sm font-medium">Alamat Pengirim</span>
            <span className="text-posBlue text-sm font-semibold text-right max-w-[60%]">
              {data.origin_address}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500 text-sm font-medium">Penerima</span>
            <span className="text-posBlue text-sm font-semibold">{data.recipient}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500 text-sm font-medium">Alamat Penerima</span>
            <span className="text-posBlue text-sm font-semibold text-right max-w-[60%]">
              {data.destination_address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailKirmanDetails;