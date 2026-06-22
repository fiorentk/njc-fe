export interface TopBannerProps {
  sellerName: string;
}

export default function TopBanner({ sellerName }: TopBannerProps) {
  return (
    <div
      className="w-full rounded-[20px] flex items-center justify-center px-6"
      style={{
        height: "150px",
        background:
          "linear-gradient(90deg, #6B8DD6 0%, #B8A4D4 50%, #A8C8E8 100%)",
      }}
    >
      <div className="text-center">
        <p className="text-white text-sm md:text-base mb-1">
          Terima kasih telah bertransaksi di
        </p>
        <h1 className="text-white text-xl md:text-2xl font-bold">
          {sellerName}
        </h1>
      </div>
    </div>
  );
}
