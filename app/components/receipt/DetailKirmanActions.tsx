import { Info } from "lucide-react";
import { ResiData } from "@/app/resi/[resi]/types";
import CopyButton from "@/app/components/CopyButton";
import ShareButton from "@/app/components/ShareButton";
import DownloadButton from "@/app/components/DownloadButton";

export interface DetailKirmanActionsProps {
  data: ResiData["data"];
}

function DetailKirmanActions({ data }: DetailKirmanActionsProps) {
  return (
    <div>
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

export default DetailKirmanActions;