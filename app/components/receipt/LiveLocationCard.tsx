import { MapPin } from "lucide-react";
import { ResiData } from "@/app/resi/[resi]/types";

export interface LiveLocationCardProps {
  data: ResiData["data"];
}

export default function LiveLocationCard({ data }: LiveLocationCardProps) {
  return (
    <div className="bg-posDarkBlue rounded-xl shadow-sm p-4 md:p-6 overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <span className="text-white font-bold text-xs">LIVE</span>
      </div>

      <h3 className="text-white font-semibold text-lg mb-6">
        {data.current_office}
      </h3>

      <div className="flex items-center gap-2">
        <img
          src="/earth.png"
          alt="Earth"
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
        />

        <img
          src="/truck.png"
          alt="Truck"
          className="w-12 h-12 md:w-16 md:h-16 object-contain animate-slideFadeLoop"
        />

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-white text-sm">{data.origin_office}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-white text-sm">
              {data.destination_office}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
