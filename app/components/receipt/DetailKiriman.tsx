import { Info } from "lucide-react";
import { ResiData } from "@/app/resi/[resi]/dummy-data";
import CopyButton from "@/app/components/CopyButton";
import ShareButton from "@/app/components/ShareButton";
import DownloadButton from "@/app/components/DownloadButton";

export interface DetailKirimanProps {
  data: ResiData["data"];
}

function DetailKiriman({ data }: DetailKirimanProps) {
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

      <div className="border-t border-gray-100 pt-4 mb-4">
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <CopyButton variant="full" />
        <DownloadButton resi={data.connote} />
        <ShareButton variant="full" resi={data.connote} />
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex gap-2">
        <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <p className="text-blue-900 text-xs leading-relaxed">
          Simpan resi ini sebagai bukti pengiriman. Hubungi layanan pelanggan jika terjadi kendala.
        </p>
      </div>
    </div>
  );
}

export default DetailKiriman;
