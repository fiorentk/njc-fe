export interface TopBannerProps {
  sellerName: string;
  logoUrl?: string;
}

export default function TopBanner({ sellerName, logoUrl }: TopBannerProps) {
  return (
    <div
      className="w-full rounded-[20px] flex items-center px-6"
      style={{
        height: "150px",
        background:
          "linear-gradient(90deg, #6B8DD6 0%, #B8A4D4 50%, #A8C8E8 100%)",
      }}
    >
      <div className="w-[20%] flex-shrink-0 flex items-center justify-start">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={sellerName}
            className="max-h-16 max-w-full object-contain rounded-lg bg-white/20 p-1"
          />
        ) : null}
      </div>
      <div className="flex-1 text-center">
        <p className="text-white text-sm md:text-base mb-1">
          Terima kasih telah bertransaksi di
        </p>
        <h1 className="text-white text-xl md:text-2xl font-bold">
          {sellerName}
        </h1>
      </div>
      <div className="hidden md:block w-[20%] flex-shrink-0" aria-hidden="true" />
    </div>
  );
}
