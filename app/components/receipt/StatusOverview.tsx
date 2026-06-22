import { MapPin, Check, Truck, Package, Radio } from "lucide-react";
import CopyButton from "@/app/components/CopyButton";
import type { ResiData } from "@/app/resi/[resi]/dummy-data";

export interface StatusOverviewProps {
  data: ResiData["data"];
}

const STEPS = [
  { label: "Diterima di Kantor Pos", icon: Check },
  { label: "Dalam Pengiriman", icon: Truck },
  { label: "Dalam Proses Pengantaran", icon: Package },
  { label: "Sudah Terkirim", icon: Check },
] as const;

const STATE_TO_STEP: Record<ResiData["data"]["current_state"], number> = {
  "Pick Up": 0,
  Shipping: 1,
  Delivered: 3,
};

function getStatusLabel(state: ResiData["data"]["current_state"]) {
  return state === "Delivered" ? "Sudah Terkirim" : "Dalam Proses";
}

function getStatusBadgeClasses(state: ResiData["data"]["current_state"]) {
  return state === "Delivered"
    ? "bg-success-green"
    : "bg-[#FF9F43]";
}

function computeETA(createdDate: string, slaDays: number): string {
  const date = new Date(createdDate);
  date.setDate(date.getDate() + slaDays);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ProgressStepper({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="hidden md:flex items-start justify-between w-full">
      {STEPS.map((step, index) => {
        const isCompleted = index < activeIndex;
        const isActive = index === activeIndex;
        const isLast = index === STEPS.length - 1;

        const Icon = step.icon;

        const dotClasses = isCompleted || isActive
          ? "bg-posBlue border-posBlue"
          : "bg-gray-200 border-gray-300";

        const iconClasses = isCompleted || isActive
          ? "text-white"
          : "text-gray-400";

        const labelClasses = isCompleted || isActive
          ? "text-posBlue"
          : "text-gray-400";

        const lineClasses = index < activeIndex
          ? "bg-posBlue"
          : "border-t-2 border-dashed border-gray-300";

        return (
          <div
            key={step.label}
            className="flex items-center flex-1 last:flex-none"
          >
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full shrink-0 border-2 flex items-center justify-center ${dotClasses}`}
              >
                <Icon size={20} className={iconClasses} />
              </div>
              <span
                className={`text-xs font-semibold mt-2 whitespace-nowrap text-center max-w-[100px] ${labelClasses}`}
              >
                {step.label}
              </span>
            </div>
            {!isLast && (
              <div
                className={`h-1 flex-1 mx-2 mt-[-28px] rounded ${lineClasses}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function ProgressStepperMobile({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex flex-col gap-3 md:hidden">
      {STEPS.map((step, index) => {
        const isCompleted = index < activeIndex;
        const isActive = index === activeIndex;
        const isLast = index === STEPS.length - 1;

        const Icon = step.icon;

        const dotClasses = isCompleted || isActive
          ? "bg-posBlue border-posBlue"
          : "bg-gray-200 border-gray-300";

        const iconClasses = isCompleted || isActive
          ? "text-white"
          : "text-gray-400";

        const labelClasses = isCompleted || isActive
          ? "text-posBlue"
          : "text-gray-400";

        return (
          <div key={step.label} className="flex items-center gap-3">
            <div className="relative flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full shrink-0 border-2 flex items-center justify-center ${dotClasses}`}
              >
                <Icon size={18} className={iconClasses} />
              </div>
              {!isLast && (
                <div
                  className={`absolute top-9 left-1/2 -translate-x-1/2 w-0.5 h-5 ${isCompleted || isActive ? "bg-posBlue" : "border-l-2 border-dashed border-gray-300"}`}
                />
              )}
            </div>
            <span
              className={`text-sm font-semibold ${labelClasses}`}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function getCityLabel(address: string, fallback: string) {
  const segments = address
    .split(",")
    .map((segment) => segment.trim())
    .filter(Boolean);
  const candidate = segments[segments.length - 2] ?? segments[segments.length - 1];

  return candidate?.replace(/\b\d{5}\b/g, "").trim() || fallback;
}

function MapBanner({ data }: { data: ResiData["data"] }) {
  const originCity = getCityLabel(data.origin_address, "Jakarta");
  const destinationCity = getCityLabel(data.destination_address, "Bandung");

  return (
    <div className="relative bg-posDarkBlue rounded-xl overflow-hidden mt-6 h-[220px] md:h-[320px]">
      <img
        src="/city.png"
        alt="City"
        className="absolute inset-0 w-full h-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-posDarkBlue via-posDarkBlue/75 to-posDarkBlue/95" />

      <div className="absolute top-4 left-4 md:top-6 md:left-6">
        <div className="flex items-center gap-1.5 bg-[#FFF1EC] text-posOrange px-2 py-0.5 md:px-2 md:py-1 rounded-full mb-2 md:mb-3 shadow-sm w-fit">
          <Radio className="w-2.5 h-2.5 md:w-3 md:h-3 animate-pulse" />
          <span className="font-bold text-[10px] md:text-xs">LIVE</span>
        </div>
        <div className="text-white/80 text-xs md:text-base font-medium">
          Lokasi saat ini:
        </div>
        <div className="text-white font-bold text-sm md:text-xl mt-1 md:mt-2">
          {data.current_office}
        </div>
      </div>

      <div className="absolute top-4 right-4 md:top-6 md:right-6">
        <img
          src="/stamp.png"
          alt="Stamp"
          className="w-16 h-12 md:w-[7.5rem] md:h-20 object-contain"
        />
      </div>

      <div className="absolute bottom-[-64%] md:bottom-[-120%] left-1/2 -translate-x-1/2">
        <img
          src="/earth.png"
          alt="Earth"
          className="w-[280px] h-[280px] md:w-[560px] md:h-[560px] object-contain animate-spinSlow"
        />
      </div>

      <div className="absolute bottom-[25%] md:bottom-[31%] left-1/2 -translate-x-1/2">
        <img
          src="/truck.png"
          alt="Truck"
          className="w-[85px] h-[85px] md:w-[180px] md:h-[180px] object-contain animate-slideFadeLoop"
        />
      </div>

      <div className="absolute bottom-1 md:bottom-2 left-[22%] md:left-[18%] -translate-x-1/2 max-w-[35%] md:max-w-none">
        <div className="flex items-center gap-1 md:gap-2 bg-[#6D7F9E]/80 backdrop-blur-sm px-2.5 py-1.5 md:px-5 md:py-2.5 rounded-lg md:rounded-xl border border-white/20 shadow-lg overflow-hidden whitespace-nowrap">
          <span className="text-white font-bold text-xs md:text-lg truncate">Kota {originCity}</span>
        </div>
        <MapPin className="w-4 h-4 md:w-8 md:h-8 text-posOrange mt-1 md:mt-3 mx-auto shrink-0" fill="currentColor" />
      </div>

      <div className="absolute bottom-1 md:bottom-2 right-[22%] md:right-[18%] translate-x-1/2 max-w-[35%] md:max-w-none">
        <div className="flex items-center gap-1 md:gap-2 bg-[#6D7F9E]/80 backdrop-blur-sm px-2.5 py-1.5 md:px-5 md:py-2.5 rounded-lg md:rounded-xl border border-white/20 shadow-lg overflow-hidden whitespace-nowrap">
          <span className="text-white font-bold text-xs md:text-lg truncate">Kota {destinationCity}</span>
        </div>
        <MapPin className="w-4 h-4 md:w-8 md:h-8 text-posOrange mt-1 md:mt-3 mx-auto shrink-0" fill="currentColor" />
      </div>
    </div>
  );
}

export default function StatusOverview({ data }: StatusOverviewProps) {
  const activeStep = STATE_TO_STEP[data.current_state];
  const statusLabel = getStatusLabel(data.current_state);
  const badgeClasses = getStatusBadgeClasses(data.current_state);
  const eta = computeETA(data.connote_created_date, data.sla);

  return (
    <div className="bg-white rounded-[20px] border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-lg text-posBlue">Status Kiriman</h2>
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wide ${badgeClasses}`}
        >
          {statusLabel}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-sm font-medium">Nomor Resi:</span>
          <span className="text-posOrange text-sm font-bold">
            {data.connote}
          </span>
          <CopyButton variant="icon" />
        </div>

        <div className="flex items-center gap-3 md:justify-end">
          <span className="text-gray-500 text-sm font-medium">Estimasi Tiba:</span>
          <span className="text-posOrange text-sm font-bold">
            {eta}
          </span>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100 mb-6">
        <ProgressStepper activeIndex={activeStep} />
        <ProgressStepperMobile activeIndex={activeStep} />
      </div>

      <MapBanner data={data} />
    </div>
  );
}
